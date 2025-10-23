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
  const popularPosts = blogPosts.slice(0, 5); // Get first 5 posts as most popular

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
      <main className="container mx-auto px-4 pt-28 pb-16">
        {/* Featured Posts Carousel */}
        {featuredPosts.length > 0 && (
          <div className="mb-8">
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
                popularPosts={popularPosts}
              />
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
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
