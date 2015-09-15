var sqltest = require("./fw-sqltests.v4.js");



/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	{
		task: "Create a database named: dog_breeds",
		query: "SHOW DATABASES",
		expectedOutput: '[{"Database":"information_schema"},{"Database":"codio_fw"},{"Database":"codio_sql_1"},{"Database":"directory"},{"Database":"dog_breeds"},{"Database":"famous_scientiss"},{"Database":"famous_scientist"},{"Database":"guitars_collection"},{"Database":"mysql"},{"Database":"people"},{"Database":"people_test"},{"Database":"performance_schema"},{"Database":"pk_GlosarioMagico"},{"Database":"wp_UXJ_child"},{"Database":"wp_ebm_docs"},{"Database":"wp_guia_de_wordpress"},{"Database":"wp_gus_business_proposals"},{"Database":"wp_gus_business_prosals"},{"Database":"wp_gus_v2"},{"Database":"wp_laboratoria_recursos"},{"Database":"wp_lvl_summit"},{"Database":"wp_uxj"},{"Database":"wp_vagari"}]',
		rollback: 'DROP DATABASE'
	},
	{
		task: "Override the dog_breeds database with the SCHEMA IF NOT EXISTS syntax",
		query: "SHOW DATABASES",
		expectedOutput: '[{"Database":"information_schema"},{"Database":"codio_fw"},{"Database":"codio_sql_1"},{"Database":"directory"},{"Database":"dog_breeds"},{"Database":"famous_scientiss"},{"Database":"famous_scientist"},{"Database":"guitars_collection"},{"Database":"mysql"},{"Database":"people"},{"Database":"people_test"},{"Database":"performance_schema"},{"Database":"pk_GlosarioMagico"},{"Database":"wp_UXJ_child"},{"Database":"wp_ebm_docs"},{"Database":"wp_guia_de_wordpress"},{"Database":"wp_gus_business_proposals"},{"Database":"wp_gus_business_prosals"},{"Database":"wp_gus_v2"},{"Database":"wp_laboratoria_recursos"},{"Database":"wp_lvl_summit"},{"Database":"wp_uxj"},{"Database":"wp_vagari"}]',
		rollback: 'DROP DATABASE'
	},
	{
		task: "Override the dog_breeds schema with the SCHEMA IF NOT EXISTS and configure the character set to be utf-8",
		query: "SHOW DATABASES",
		expectedOutput: '[{"Database":"information_schema"},{"Database":"codio_fw"},{"Database":"codio_sql_1"},{"Database":"directory"},{"Database":"dog_breeds"},{"Database":"famous_scientiss"},{"Database":"famous_scientist"},{"Database":"guitars_collection"},{"Database":"mysql"},{"Database":"people"},{"Database":"people_test"},{"Database":"performance_schema"},{"Database":"pk_GlosarioMagico"},{"Database":"wp_UXJ_child"},{"Database":"wp_ebm_docs"},{"Database":"wp_guia_de_wordpress"},{"Database":"wp_gus_business_proposals"},{"Database":"wp_gus_business_prosals"},{"Database":"wp_gus_v2"},{"Database":"wp_laboratoria_recursos"},{"Database":"wp_lvl_summit"},{"Database":"wp_uxj"},{"Database":"wp_vagari"}]',
		rollback: 'DROP DATABASE'
	},
];

var dbList = [
	'information_schema',
	'codio_fw',
	'codio_sql_1',
	'directory',
	'famous_scientiss',
	'famous_scientist',
	'guitars_collection',
	'mysql',
	'people',
	'people_test',
	'performance_schema',
	'pk_GlosarioMagico',
	'wp_UXJ_child',
	'wp_ebm_docs',
	'wp_guia_de_wordpress',
	'wp_gus_business_proposals',
	'wp_gus_business_prosals',
	'wp_gus_v2',
	'wp_laboratoria_recursos',
	'wp_lvl_summit',
	'wp_uxj',
	'wp_vagari'
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands(tasks, {
	dbName: "dog_breeds",
	dropDatabaseAtEnd: true,
	deleteTableRowsAtEnd: false,
	getOutputs: false,
	dbList: dbList
});