import {UserRepository} from './UserRepository';
import {IUser} from '../../models/User';
import {DataSourceAccessorImpl} from '../../db/accessor/DataSourceAccessorImpl';
import {BaseDataSource} from '../../db/BaseDataSource';
import {IBankedSteps} from '../bankedsteps/steps';

export class UserRepositoryImpl implements UserRepository {

    private dataSource: BaseDataSource;

    constructor() {
        this.dataSource = new DataSourceAccessorImpl().getDataSource();
    }


    add(user: IUser): Promise<IUser> {
        return this.dataSource.add(user);
    }

    remove(id: number): Promise<boolean> {
        return this.dataSource.remove(id);
    }

    getAll(): Promise<IUser[]> {
        return this.dataSource.getAll();
    }

    getOneById(id: number): Promise<IUser> {
        return this.dataSource.getOneById(id);
    }

    update(user: IUser): Promise<IUser>  {
        return this.dataSource.update(user)
    }

    getOneByEmail(email: string): Promise<IUser> {
        return this.dataSource.getOneByEmail(email);
    }

    bankUserSteps(bankedSteps: IBankedSteps): Promise<IBankedSteps>{
        return this.dataSource.bankUserSteps(bankedSteps);
    }

    getAllBankedUserSteps(): Promise<IBankedSteps[]>{
        return this.dataSource.getAllBankedUserSteps();
    }

    getLatestBankedStepByUserId(userId: string): Promise<IBankedSteps>{
        return this.dataSource.getLatestBankedStepByUserId(userId);
    }

}
