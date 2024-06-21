using WebAppMongo01.Models;

namespace WebAppMongo01.ViewModels
{
    public class BookingListViewModel
    {
        public IEnumerable<Booking> Bookings { get; set; }
    }
}
