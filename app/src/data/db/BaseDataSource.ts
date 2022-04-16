import {DataSource} from './DataSource';
import { IUser} from '../models/User';
import {IBankedSteps} from '../repository/bankedsteps/steps';

export abstract class BaseDataSource implements DataSource {
    abstract add(user: IUser): Promise<IUser>;

    abstract getAll(): Promise<IUser[]>;

    abstract getOneById(id: number): Promise<IUser>;

    abstract remove(id: number): Promise<boolean>;

    abstract update(user: IUser): Promise<IUser>;

    abstract getOneByEmail(email: string): Promise<IUser>;
    abstract bankUserSteps(bankedSteps: IBankedSteps): Promise<IBankedSteps>;
    abstract getAllBankedUserSteps(): Promise<IBankedSteps[]>;
    abstract getLatestBankedStepByUserId(userId: string): Promise<IBankedSteps>;
}
