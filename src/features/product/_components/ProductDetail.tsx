type Props = {};
import { useProductQuery } from "@/hooks/useProductQuery";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingDetail from "./LoadingDetail";

const ProductDetail = () => {
  const { idProd } = useParams();

  const { data, isLoading } = useProductQuery(idProd! as any);
  if (isLoading) return <LoadingDetail></LoadingDetail>;
  return (
    <div>
      <Card className="w-[550px] mx-auto mt-[200px]">
        <CardHeader>
          <CardTitle>DETAIL PRODUCTS</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  defaultValue={data?.name}
                  id="name"
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Input
                  defaultValue={data?.price}
                  id="name"
                  placeholder="Name of your project"
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
