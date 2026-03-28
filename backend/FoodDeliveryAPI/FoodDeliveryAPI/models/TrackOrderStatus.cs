using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryAPI.Models
{
    public class TrackOrderStatus
    {
        [Key]
        public int TrackId { get; set; }

        public int OrderId { get; set; }

        public string Status { get; set; }

        public DateTime StatusTime { get; set; }
    }
}