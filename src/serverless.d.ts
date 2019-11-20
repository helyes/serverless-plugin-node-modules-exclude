export interface Serverless {
  service: Service;
}

export interface Service {
  package?: Package;
}

export interface Package {
  exclude?: String [];
}
