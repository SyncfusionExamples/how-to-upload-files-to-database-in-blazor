using Blazor_server_app_5.Data;

namespace Blazor_server_app_5.Services
{
    public class Imgservice
    {
        private readonly ApplicationDbContext _dbcontext;
        public Imgservice(ApplicationDbContext _db)
        {
            _dbcontext = _db;
        }
        public bool Uploadimg(ImgClass ic)
        {
            _dbcontext.Saveimg.Add(ic);
            _dbcontext.SaveChanges();
            return true;
        }
    }
}
