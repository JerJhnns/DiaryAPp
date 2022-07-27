using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DiaryAPp.Models;

namespace DiaryAPp.Data
{
    public class DiaryAPpContext : DbContext
    {
        public DiaryAPpContext (DbContextOptions<DiaryAPpContext> options)
            : base(options)
        {
        }

        public DbSet<DiaryAPp.Models.Topic> Topic { get; set; }
    }
}
