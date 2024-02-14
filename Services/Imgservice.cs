using UploadingFiles.Data;

namespace UploadingFiles.Services
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
