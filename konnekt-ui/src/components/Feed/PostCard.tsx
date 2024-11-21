import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const PostCard = () => {
  return (
    <>
      <Card className="max-w-xl flex flex-col gap-3">
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
        <CardContent>
          <div className="space-y-2">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              facere ab itaque exercitationem deserunt non!
            </p>
            <img
              src="https://www.bugatti.com/media/miaefht0/bugatti-divo.jpeg?width=1064&height=709&rnd=133343620078870000"
              alt=""
              className="rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
