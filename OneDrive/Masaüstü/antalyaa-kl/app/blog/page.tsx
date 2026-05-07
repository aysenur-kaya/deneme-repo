const posts = [
  "Klima soğutmuyor sorunu nasıl çözülür?",
  "Buzdolabı neden yeterince soğutmaz?",
  "Çamaşır makinesi sıkmama arızası rehberi",
  "Bulaşık makinesi su almıyorsa ne yapılmalı?"
];

export default function BlogPage() {
  return (
    <main className="container-main py-16">
      <h1 className="text-4xl font-bold">Servis Blogu</h1>
      <p className="mt-3 text-zinc-600">Klima ve beyaz eşya arızaları için bilgilendirici içerikler.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post} className="rounded-2xl border p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{post}</h2>
            <p className="mt-2 text-sm text-zinc-600">Yakında yayında.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
