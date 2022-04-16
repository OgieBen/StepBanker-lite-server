import {IUser} from '../../data/models/User';
import {IBankedSteps} from '../../data/repository/bankedsteps/steps';

export interface UserService {
    findAll() : Promise<IUser[]>
    findUserById(id: number): Promise<IUser>
    findUserByEmail(email: string): Promise<IUser>
    registerUser(user: IUser): Promise<IUser>;
    removeUser(id: number): Promise<boolean>;
    updateUser(user: IUser): Promise<IUser>;
    bankUserSteps(bankedSteps: IBankedSteps): Promise<IBankedSteps>
    getLatestBankedStepByUserId(userID: string): Promise<IBankedSteps>
    getAllBankedUserSteps() : Promise<IBankedSteps[]>
}
