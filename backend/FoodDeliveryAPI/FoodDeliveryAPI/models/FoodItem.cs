using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryAPI.Models
{
    public class FoodItem
    {
        [Key]
        public int FoodId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public string ImageUrl { get; set; }

        public bool IsAvailable { get; set; }
    }
}