using System.ComponentModel.DataAnnotations;

namespace UploadingFiles.Data
{
    public class ImgClass
    {
        [Key]
        public int Imgid { get; set; }

        public string Imgname { get; set; }
        //public byte[] Img { get; set; }
    }
}
