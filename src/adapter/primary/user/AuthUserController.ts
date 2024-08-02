import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { AuthenticateUserPort } from "../../../application/User/port/primary/AuthenticateUserPort"
import { UserMapper } from '../../mappers/UserMapper';
import { UnCaughtError } from '../../../Errors/Uncaught';

@injectable()
export class AuthUserController {
    private userMapper: typeof UserMapper
    constructor(@inject('AuthenticateUserUseCase') private userCreate: AuthenticateUserPort) {
        this.userCreate = userCreate
        this.userMapper = UserMapper
    }
    async login(body: { email: string, password: string }): Promise<{ token: string }> {
        try {
            let token = await this.userCreate.login(body.email, body.password)
            return { token: token }
        } catch (error: any) {
            throw new UnCaughtError(error.message, error.status)
        }
    }
    async authenticate(token: string): Promise<any> {
        try {
            //console.log("Tokennn", token)
            let user = await this.userCreate.authenticate(token)
            //console.log("Aqui->", user)
            return this.userMapper.toUI(user)
        } catch (error: any) {
            throw new UnCaughtError(error.message, error.status)
        }
    }

}