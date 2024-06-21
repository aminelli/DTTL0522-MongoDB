using MongoDB.Bson;
using WebAppMongo01.Models;


namespace WebAppMongo01.Services
{
    public interface ICarService
    {
        IEnumerable<Car> GetAllCars();
        Car? GetCarById(ObjectId id);
        void AddCar(Car newCar);

        void EditCar(Car updatedCar);

        void DeleteCar(Car carToDelete);
    }


}
