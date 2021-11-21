import UserService from "./UserService/User.Service";
type ServiceType = typeof UserService;

type StrategyServiceType = Record<string, ServiceType>;

export enum SERVICES_ENUMS {
  USER = "UserService",
}

const StrategyServices: StrategyServiceType = {
  [SERVICES_ENUMS.USER]: UserService
}

class Services {
  static getServiceBy(serviceName: string) {
    return new StrategyServices[serviceName]();
  }
}
export default Services;