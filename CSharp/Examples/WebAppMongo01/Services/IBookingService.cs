using MongoDB.Bson;
using WebAppMongo01.Models;

namespace WebAppMongo01.Services
{
    public interface IBookingService
    {
        IEnumerable<Booking> GetAllBookings();
        Booking? GetBookingById(ObjectId id);

        void AddBooking(Booking newBooking);

        void EditBooking(Booking updatedBooking);

        void DeleteBooking(Booking bookingToDelete);
    }

}
