import { Heart, MessageSquareText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const PostCard = () => {
  return (
    <>
      <Card className="md:max-w-lg flex flex-col border-none shadow-none">
        <CardHeader className="">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={`https://avatar.iran.liara.run/public/boy?username=
                        Priyangsu`}
                alt={"Priyangsu"}
              />
              <AvatarFallback className="rounded-lg">
                <img
                  src={`https://avatar.iran.liara.run/public/boy?username=
                        Priyangsu`}
                  alt={"Priyangsu"}
                />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <CardTitle>Priyangsu Banik</CardTitle>
              <CardDescription>20th November</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 w-full">
          <div className="space-y-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-md object-cover w-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <Heart className="cursor-pointer" />
            <MessageSquareText className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold">
              6.4M likes
            </div>
          </div>
        </CardContent>
        <CardFooter className="">
          <div className="flex flex-col  gap-2">
            <p className="font-bold w-full">
              Priyangsu Banik{" "}
              <span className="font-normal line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                facere ab itaque exercitationem deserunt non!
              </span>
            </p>
            <p className="text-slate-400 cursor-pointer">
              View all 2M comments
            </p>
            <Input
              type="text"
              placeholder="Write a comment..."
              className="p-0 border-none focus:outline-none outline-none rounded-none shadow-none"
            />
          </div>
        </CardFooter>
        <Separator />
      </Card>
    </>
  );
};

export default PostCard;
