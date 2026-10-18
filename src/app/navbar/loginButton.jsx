"use client";
import { Button, Dropdown, Avatar } from "@heroui/react";
import Link from 'next/link';
import toast from "react-hot-toast";
import { authClient } from "../../lib/auth-client";

const loginButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handeOnSubmit = async () => {
    try {
      await authClient.signOut();
      toast.success("সাইন আউট সফল হয়েছে");
    } catch (error) {
      console.error(error);
      toast.error("সাইন আউট ব্যর্থ হয়েছে");
    }
  };

  return (
      <div>
        {
            user? <div>
    <Dropdown>
      
        <Button  aria-label="Menu" className="bg-white text-black font-bold">
        <div className="flex items-center gap-4">
   
       
      <Avatar>
        <Avatar.Image
          alt="Blue"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
        />
        <Avatar.Fallback>B</Avatar.Fallback>
      </Avatar>
      <div>
        {user.name}
      </div>
      
    </div>
        </Button>
     
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Link
            href="/profile"
            className="rounded-lg px-2.5 py-2 text-xs font-semibold text-green-700 transition"
          >
            Profile
          </Link>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Link
            href="/sign-in"
            className="rounded-lg border border-green-700 px-2.5 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 sm:px-4 sm:text-sm"
          onClick={handeOnSubmit}>
            সাইন Out
          </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
            
            </div> :   <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/sign-in"
            className="rounded-lg border border-green-700 px-2.5 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-green-700 px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-green-800 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>

        }
      </div>
    );
};

export default loginButton;