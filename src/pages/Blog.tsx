import { useState, useMemo } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedCarousel from "@/components/blog/FeaturedCarousel";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts, allTags } from "@/data/blogPosts";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  return (
    <div className="min-h-screen">
      <BlogHeader />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog AUTTOPUS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tendências e boas práticas em automação, otimização de processos e transformação digital para contabilidade e finanças.
          </p>
        </div>

        {/* Featured Posts Carousel */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <FeaturedCarousel posts={featuredPosts} />
          </div>
        )}

        {/* Main Content with Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogSidebar
                tags={allTags}
                selectedTag={selectedTag}
                onTagSelect={setSelectedTag}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">
              {selectedTag ? `Posts sobre ${selectedTag}` : "Todos os Posts"}
            </h2>
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum post encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
