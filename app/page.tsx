"use strict";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Home() {
  return (
    <>
      {/* navbar that has a glass effect and is transparent but anything under it becomes blurry and theres a border on the bottom */}
      <nav className="fixed inset-x-0 top-0 z-10 bg-white bg-opacity-0 backdrop-blur-md border-b border-black-200">
        <div className="container mx-auto flex items-center justify-between p-2.5">
          <div className="flex items-center gap-4">
            <Label className="text-lg font-bold">targeteater.xyz</Label>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Home</Button>
            <Button variant="outline">About</Button>
            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="relative">
          <Image
            src="/grid2.png"
            alt="Description of the image"
            width={700}
            height={700}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Badge className="mb-1">Certified&nbsp;<span className="text-green-600 font-bold">skid!</span></Badge>
            <div className="relative">
              <Label className="text-4xl font-bold mb-2 leading-tight">
                Welcome to sigma portofolio <span className="text-green-500 mb-4">targeteater.</span>
              </Label>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">sad</Button>
              <Button variant="outline">zartet</Button>
            </div>
          </div>
        </div>
      </main>

      {/* a project tab that consists of my projects like 4 cards anda  My recent projects */}
      <section className="py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Label className="text-4xl font-bold mb-2">My Recent Projects</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <Image
                    src="/grid2.png"
                    alt="Description of the image"
                    width={700}
                    height={700}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>TarTool.xyz</CardTitle>
                  <CardDescription>
                    A multi-tool website that has a lot of tools like a lua compiler, a embed server for discord. For more information visit the website.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://tartool.xyz/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View Project</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/grid2.png"
                    alt="Description of the image"
                    width={700}
                    height={700}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>Santo Reborn</CardTitle>
                  <CardDescription>
                    Santo ware reborn, Santoware used to be a roblox external cheat that was paid but now its free and updated by our team.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://discord.gg/JpZU5TYepR" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View Project</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/grid2.png"
                    alt="Description of the image"
                    width={700}
                    height={700}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>Astoris.pro</CardTitle>
                  <CardDescription>
                    Astoris.pro is a website that resells plenty of things. It's currently down due to vps issues. Feel free to check it out when its back up.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://astoris.pro/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View Project</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/grid2.png"
                    alt="Description of the image"
                    width={700}
                    height={700}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>Github</CardTitle>
                  <CardDescription>
                    Theres plenty of projects on my github that you can check out. Feel free to check them out and star them if you like them. Also feel free to contribute.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://github.com/targeteater" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View Project</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* contact me section */}
      <section className="py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Label className="text-4xl font-bold mb-2">Contact Me</Label>
            <Label className="text-lg text-center">
              If you want to contact me feel free to contact me on discord or twitter. I'm always open to new ideas and I'm always looking for new projects to work on.
              If you have any ideas or projects you want me to work on feel free to contact me.
            </Label>
            <div className="flex gap-4">
              <a target="_blank" rel="noopener noreferrer">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">💬 Discord</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>My Discord information</AlertDialogTitle>
                      <AlertDialogDescription>
                       💬 91ba
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Continue</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </a>
              <a href="https://github.com/targeteater" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">🐦 Github</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* about me section */}
      <section className="py-24">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-gradient-radial from-green-500 to-transparent"></div>
            </div>            
            <Label className="text-4xl font-bold mb-2">About Me</Label>
            <Label className="text-lg text-center">
              Hello, I'm targeteater. I'm a developer that makes a lot of things. I'm currently working on a lot of projects and I'm always open to new ideas. I'm currently working on a lot of projects and I'm always open to new ideas. 
              I have a lot of experience in lua, javascript, typescript & python and more. I'm always open to new ideas and I'm always looking for new projects to work on.
              If you have any ideas or projects you want me to work on feel free to contact me.
            </Label>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-white bg-opacity-0 backdrop-blur-md border-t border-black-200">
        <div className="container mx-auto flex items-center justify-center p-2.5">
          <div className="flex items-center gap-4">
            <Label className="text-lg font-bold">targeteater.xyz 2024</Label>
          </div>
        </div>
      </footer>
    </>
  );
}