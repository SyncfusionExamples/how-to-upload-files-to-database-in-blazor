using System.ComponentModel.DataAnnotations;

namespace Blazor_server_app_5.Data
{
    public class ImgClass
    {
        [Key]
        public int Imgid { get; set; }

        public string Imgname { get; set; }
        public byte[] Img { get; set; }
    }
}
