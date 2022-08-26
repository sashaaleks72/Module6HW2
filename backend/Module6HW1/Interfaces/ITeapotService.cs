using Module6HW1.Models;
using Module6HW1.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Module6HW1.Interfaces
{
    public interface ITeapotService
    {
        public Task<List<Teapot>> GetTeapots();

        public Task<Teapot> GetTeapotById(Guid id);

        public Task AddTeapot(TeapotViewModel teapotModel);

        public Task EditTeapotById(Guid id, TeapotViewModel teapotModel);

        public Task DeleteTeapotById(Guid id);
    }
}
