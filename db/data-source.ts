import {DataSource , DataSourceOptions} from 'typeorm'
export const dataSourceOptions : DataSourceOptions  = {
    type: 'postgres',
    host: 'localhost' ,
    port: 5432 ,
    username: 'postgres',
    password: 'Gagan@1313',
    database: 'EcomAPI',
    entities: [],
    migrations: [],
    logging: false,
    synchronize: false


}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;