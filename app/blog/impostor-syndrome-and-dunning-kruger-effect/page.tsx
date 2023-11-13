import Image from "next/image";
import Image1 from '@/public/assets/blog-images/impostor-and-dunning-kruger/1.webp'
import Image2 from '@/public/assets/blog-images/impostor-and-dunning-kruger/2.webp'
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://gmahesa.com/blog/impostor-syndrome-and-dunning-kruger-effect'),
  title: 'Impostor Syndrome and The Dunning-Kruger Effect | Gathan Mahesa',
  description: 'The correlation between impostor syndrome and the Dunning-Kruger effect',
  openGraph: {
    title: 'Gathan Mahesa',
    description: 'The correlation between impostor syndrome and the Dunning-Kruger effect',
    url: 'https://gmahesa.com/blog/impostor-syndrome-and-dunning-kruger-effect',
    siteName: 'Gathan Mahesa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
  }
};
export default function Page() {
  return (
    <article className="flex flex-col gap-10 px-4 md:px-0">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium"> Sindrom Impostor dan Efek Dunning-Kruger </h1>
        <span className="text-neutral-200"> 12 November 2023 </span>
      </header>
      <main className="flex flex-col gap-5 text-xl leading-10 text-neutral-300">
        <p>
          Sindrom impostor dan efek Dunning-Kruger merupakan topik yang cukup populer di LinkedIn dan Quora internasional, namun jarang dibahas di warganet Indonesia (mungkin ada, tapi gue aja yang gak tau). Karena gue sering mengalami dua hal tersebut, mungkin gue bakal bahas di sini. 
        </p>
        <div className="w-full h-max flex items-center justify-center ">
          <div className="w-full md:w-2/3 h-auto">
            <Image className="w-full h-full object-cover" src={Image1} alt="Grafik hubungan antara efek Dunning-Kruger dan sindrom impostor" width={1000} height={1000}/>
          </div>
        </div>
        <p>
          Seperti yang anda lihat di grafik, efek Dunning-Kruger terjadi ketika kita terlalu percaya diri dibandingkan dengan pengetahuan yang dimiliki. Sindrom impostor, di sisi lain, terjadi ketika kita kurang percaya diri tentang pengetahuan kita dan merasa kalau kita masih belum cukup tahu.
        </p>
        <p>
          <i>Strictly speaking</i>, Dunning & Kruger (1999) <i>"across 4 studies, […] found that participants scoring in the bottom quartile on tests of humor, grammar, and logic grossly overestimated their test performance and ability".</i>
        </p>
        <p>
          Setiap orang pasti pernah mengalami efek Dunning-Kruger setidaknya sekali. Jika Anda seperti kebanyakan orang, Anda mungkin pernah nonton tutorial cara bikin website di YouTube dan merasa kaya jadi orang paling jago di dunia <i>web development</i>. Upload foto lagi <i>ngoding</i> di media sosial, lalu siap banget ngejar posisi di FAANG. Tapi ternyata, setelah melihat lebih dalam, baru sadar masih banyak banget yang harus dipelajari. Merasa udah jago, eh, pas dipraktekkan ke proyek yang lebih serius, baru ngerasa seberapa banyak yang belum dipahami. Gapapa, gue juga pernah kayak gitu kok.
        </p>
        <p>
          Sebaliknya, sindrom impostor berada di kuadran berlawanan dari grafik tersebut. Sindrom impostor adalah fenomena psikologis meragukan orang meragukan pencapaian dan pengetahuan mereka. Mereka mungkin memiliki rasa takut untuk terbongkar sebagai seorang penipu meskipun ada bukti bahwa mereka sangat berprestasi. Meskipun tidak diklasifikasikan sebagai penyakit yang benar, sindrom impostor adalah fenomena psikologis yang banyak menghantui orang-orang.
        </p>
        <p>
          Sindrom impostor itu ketika Anda sebenernya jago bikin <i>software</i>, tapi tetap merasa karya Anda kurang oke. Atau, bayangkan Anda jadi pembalap F1, tapi masih merasa tidak bisa mengemudikan mobil biasa di jalan. Itu, perasaan seperti itu suka muncul.
        </p>
        <p>
          Kedua fenomena ini bisa dialami oleh siapa saja, terlepas dari tingkat kesuksesan atau kompetensinya. Oleh karena itu, kedua efek ini sebaiknya dibahas secara luas. Mereka adalah masalah yang dapat mempengaruhi emosi dan produktivitas kita.
        </p>
        <h2 className="text-3xl font-medium text-white">
          Nikmati Prosesnya
        </h2>
        <p>
          Anda mungkin sekarang berpikir: "oke, masalah yang cukup menarik, tapi apa yang harus gue lakuin tentang itu?" Nah, ChatGPT ngasih beberapa tips yang berguna:
        </p>
        <ul className="flex flex-col gap-3 pl-10">
          <li>
            <b>1. Akui Perasaan Anda</b>: Mengakui dan menerima emosi Anda dapat membantu Anda menghadapi dan mengatasi sindrom impostor, sementara mengakui batasan dapat membantu melawan efek Dunning-Kruger.
          </li>
          <li>
            <b>2. Ubah Pikiran Anda</b>: Mengubah percakapan negatif tentang diri sendiri menjadi percakapan positif dan realistis dapat membantu melawan sindrom impostor dan efek Dunning-Kruger.
          </li>
          <li>
            <b>3. Tetapkan Tujuan yang Masuk Akal</b>: Menetapkan tujuan yang dapat dicapai dapat membantu melawan sindrom impostor dan efek Dunning-Kruger dengan memberikan ukuran keberhasilan yang realistis dan mencegah harapan yang tidak realistis.
          </li>
          <li>
            <b>4. Cari Dukungan</b>: Menerima dukungan dari rekan atau mentor dapat membantu mengurangi perasaan menjadi seorang penipu, sementara mendapatkan umpan balik dan kritik konstruktif dapat membantu melawan efek Dunning-Kruger.
          </li>
          <li>
            <b>5. Ambil Tindakan</b>: Mengambil tindakan menuju tujuan Anda dapat membantu meningkatkan rasa percaya diri Anda dan melawan sindrom impostor, sementara mengambil waktu untuk belajar dan memperbaiki dapat melawan efek Dunning-Kruger dengan merendahkan persepsi tentang keahlian Anda sendiri.
          </li>
        </ul>
        <p>
          Ini sebenarnya saran yang bagus dan gue berharap gue udah dapet sejak gue masih sekolah. Namun, gue punya tip tambahan: <b>nikmati prosesnya</b>. Grafik di bawah telah mempopulerkan efek Dunning-Kruger dan sindrom impostor:
        </p>
        <div className="w-full h-max flex items-center justify-center ">
          <div className="w-full md:w-2/3 h-auto">
            <Image className="w-full h-full object-cover" src={Image2} alt="Efek Dunning Kruger" width={1000} height={1000}/>
          </div>
        </div>
        <p>
          Grafik di atas menggambarkan hubungan antara percaya diri dan pengetahuan. Grafik tersebut menunjukkan bahwa ketika pengetahuan bertambah, keyakinan tidak mengikuti. Grafik memiliki tiga titik berbeda: <i>mount of stupidity, valley of despair,</i> dan <i>line of balance.</i> Titik-titik ini hampir tidak bisa kita hindari dalam proses belajar.         </p>
        <p>
          Dalam dunia <i>software development</i>, kita sering ngalamin hal yang mirip sindrom impostor dan efek Dunning-Kruger, walau tidak selalu dibahas. Seperti lagi naik rollercoaster pengetahuan-keyakinan. Di awal, ketika baru belajar <i>ngoding</i>, mungkin merasa rendah hati, tau masih banyak yang harus dipelajari. Tapi lama kelamaan, terutama pas lagi nangani proyek yang makin kompleks, baru kelihatan banget masalah ini. Misalnya, pas lagi bikin fitur, awalnya bisa overconfident dengan kemampuan sendiri. Tapi begitu dapat feedback kritis dari tim atau <i>client</i>, tiba-tiba muncul rasa ragu, kayak sindrom impostor gitu. Meski challenging, proses ini yang akhirnya membantu kita tumbuh dan mengembangkan pemahaman yang lebih dalam tentang <i>software development</i>, membentuk hubungan seimbang antara keyakinan dan pengetahuan dalam dunia <i>software development</i>.
        </p>
        <p>
          Jadi, tip tambahan gue selain ide dari ChatGPT adalah nikmati prosesnya. Jangan terlalu keras pada diri sendiri ketika Anda mengalami sindrom impostor atau efek Dunning-Kruger. Sebaliknya, gunakan pengalaman ini sebagai kesempatan untuk merenung tentang pengetahuan Anda, mencari dukungan, dan menetapkan tujuan yang masuk akal. Setiap orang menjalani perjalanan ini, dan itu merupakan langkah yang diperlukan menuju pertumbuhan dan perkembangan.
        </p>
        <p>
          Memahami sindrom impostor dan efek Dunning-Kruger penting, terutama bagi mereka di dunia <i>software development</i>. Dengan mengakui masalah ini dan nikmati proses belajar, kita dapat mengatasi masalah ini dan bisa menjadi lebih produktif dan sukses dalam karier kita.
        </p>
        <p>
          Seiring berjalannya waktu, ketika seseorang mendapatkan lebih banyak pengetahuan dan pengalaman di bidang mereka, mereka mungkin mulai normalisasi hubungan keyakinan-pengetahuan mereka. Mereka mungkin memahami kelebihan dan kelemahan mereka dan menyadari bahwa kemampuan mereka tidaklah tetap tetapi dapat dikembangkan melalui kerja keras dan dedikasi. Kesadaran diri yang meningkat ini dapat mengarah pada rasa keyakinan yang lebih realistis, yang memungkinkan seseorang membuat keputusan yang terinformasi dan mengejar tujuan mereka dengan kepastian yang lebih besar.
        </p>
      </main>
    </article>
  );
}
