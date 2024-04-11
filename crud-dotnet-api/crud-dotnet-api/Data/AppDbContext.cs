using Microsoft.EntityFrameworkCore;

namespace crud_dotnet_api.Data
{
    public class AppDbContext : DbContext
    {
        /// <summary>
        /// Contructor Created for DBContext to Query or To save the Instance of your Entities.
        /// </summary>
        /// <param name="options"></param>
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        /// <summary>
        /// Set the Employee Table in AppDbConext.
        /// </summary>
        public DbSet<Employee> Employees { get; set; }
    }
}
