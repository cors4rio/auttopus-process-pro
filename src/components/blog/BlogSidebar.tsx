import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogSidebarProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  popularPosts: BlogPost[];
}

const BlogSidebar = ({
  tags,
  selectedTag,
  onTagSelect,
  searchQuery,
  onSearchChange,
  popularPosts,
}: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Buscar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Badge
              variant={selectedTag === null ? "default" : "outline"}
              className="cursor-pointer w-full justify-center py-2"
              onClick={() => onTagSelect(null)}
            >
              Todas
            </Badge>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer w-full justify-center py-2"
                onClick={() => onTagSelect(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mais Acessados */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mais Acessados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
