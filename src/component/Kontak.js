import React from 'react';

function Kontak() {
  return (
    <section
      id="contact"
      className="py-16 bg-white flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-center text-[#38517E] mb-4">
        KONTAK
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Ada yang ingin disampaikan atau ditanyakan? Silahkan isi form di bawah ini
      </p>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nama Anda"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email Anda"
              />
            </div>
          </div>

          {/* Subjek */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subjek
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Judul Pesan"
            />
          </div>

          {/* Pesan */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Isi pesan Anda"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-[35px] transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Kontak;
