import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <>
      <header className="bg-blue-600 flex-row flex justify-between">
        <h1 className="text-lg p-2 block font-bold">TaskFlow</h1>
        {/* <nav className="">
          <ul className="flex flex-row py-3 gap-4 ">
            <li className="hover:bg-cyan-900 font-bold">
              <a href="/login">Login</a>
            </li>
            <li className="hover:bg-cyan-900 font-bold">
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav> */}
      </header>
      <div className="grid items-center justify-items-center py-5 gap-1">
        <main className="flex flex-row gap-2">
          <Card className="bg-red-400 p-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card>
          {/* <CardWithForms />
          <CardWithForms /> */}
        </main>
      </div>
    </>
  );
}
