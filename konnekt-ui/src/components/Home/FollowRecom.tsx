import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const FollowRecom = () => {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardContent className="p-5 space-y-4 max-w-lg">
          <p className="font-bold text-xl">Suggestions</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={`https://avatar.iran.liara.run/public/boy?username=
                      Priyangsu`}
                    alt=""
                  />
                  <AvatarFallback className="rounded-lg">
                    <img
                      src={`https://avatar.iran.liara.run/public/boy?username=
                    Priyangsu`}
                      alt=""
                    />
                  </AvatarFallback>
                </Avatar>
                <p className="">Priyangsu Banik</p>
              </div>
              <Button>Follow</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default FollowRecom;
