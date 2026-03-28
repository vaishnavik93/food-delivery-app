using Microsoft.EntityFrameworkCore;
using FoodDeliveryAPI.Models;

namespace FoodDeliveryAPI.Data
{
    public class FoodDeliveryContext : DbContext
    {
        public FoodDeliveryContext(DbContextOptions<FoodDeliveryContext> options)
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<FoodItem> FoodItems { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<OrderItem> OrderItems { get; set; }

        public DbSet<Admin> Admins { get; set; }

        public DbSet<TrackOrderStatus> TrackOrderStatus { get; set; }
    }
}