var conn = require("./db");
const bcrypt = require("bcrypt");

module.exports = {
  render(req, res, error) {
    res.render("admin/login", {
      body: req.body,
      error,
    });
  },

  login(email, password) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM tb_users WHERE email = ?`,
        [email],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length === 0) {
              reject("Usuário ou Senha Incorretos");
            } else {
              let row = results[0];
              // Aqui deve ser feita a comparação segura de senha
              bcrypt.compare(password, row.password, (err, res) => {
                if (res) {
                  resolve(row);
                } else {
                  reject("Usuário ou Senha Incorretos");
                }
              });
            }
          }
        }
      );
    });
  },

  getUsers() {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_users ORDER BY name`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  save(fields, files) {
    return new Promise((resolve, reject) => {
      let query, params;

      bcrypt.hash(fields.password, 10, (err, hashedPassword) => {
        if (err) {
          reject(err);
        } else {
          if (parseInt(fields.id) > 0) {
            query = `
                        UPDATE tb_users
                        SET name = ?,
                            email = ?,
                            password = ?
                        WHERE id = ?
                    `;
            params = [fields.name, fields.email, hashedPassword, fields.id];
          } else {
            query = `
                        INSERT INTO tb_users (name, email, password)
                        VALUES (?, ?, ?)
                    `;
            params = [fields.name, fields.email, hashedPassword];
          }

          conn.query(query, params, (err, results) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  },

  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM tb_users WHERE id = ?`, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};
