import {Vehicles} from "./lab4";
import IOwner = Vehicles.IOwner;
import TypeOfDocument = Vehicles.TypeOfDocument;
import IVehicle = Vehicles.IVehicle;
import Owner = Vehicles.Owner;
import Vehicle = Vehicles.Vehicle;
import ICar = Vehicles.ICar;
import classAuto = Vehicles.classAuto;
import BodyType =Vehicles.BodyType;
import Car = Vehicles.Car;
import IMotorbike = Vehicles.IMotorbike;
import Motorbike = Vehicles.Motorbike;
import IVehicleStorage = Vehicles.IVehicleStorage;
import VehicleStorage = Vehicles.VehicleStorage;


const owner: IOwner = new Owner("Данил","Ушаков","Романович",new Date(2005,21,10),TypeOfDocument.PASSPORT,123456,7890);

const car: ICar = new Car(BodyType.SEDAN,classAuto.A,2022,"Lada","Vesta","JHMCM56557C404453","03-10/543",owner);
const motorBike: IMotorbike = new Motorbike("Одинарная закрытая рама",true,2020,"Yamaha","Model1","JHMCM56557C404453","03-10/543",owner);
const jsonStrignify = JSON.stringify(car);

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
vehicleStorage.save(car);
vehicleStorage.save(motorBike);

console.log(vehicleStorage.getAll());
console.log(jsonStrignify); 
