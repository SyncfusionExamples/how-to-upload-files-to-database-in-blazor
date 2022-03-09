using Microsoft.EntityFrameworkCore;

namespace Blazor_server_app_5.Data
{
    public class ApplicationDbContext: DbContext
    {
        protected readonly ApplicationDbContext _dbcontext;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }
        public DbSet<ImgClass> Saveimg { get; set; }
    }
}
