migration:
	npx sequelize-cli migration:generate --name $(name)

migrate:
	npx sequelize-cli db:migrate

undo:
	npx sequelize-cli db:migrate:undo