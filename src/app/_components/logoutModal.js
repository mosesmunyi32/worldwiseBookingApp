"use client";

import { useRef } from "react";
import { signOutAction } from "../_lib/actions"; // adjust path

export default function LogoutModal() {
  const ref = useRef(null);

  function handleOpen() {
    ref.current?.showModal();
  }

  return (
    <>
      <button onClick={handleOpen}>Logout</button>

      <dialog
        ref={ref}
        className="modal flex justify-center items-center w-screen "
      >
        <div className="modal-box text-accent-300 bg-primary-800">
          <h3 className="font-bold text-lg">Confirm Logout</h3>
          <p className="py-4">Are you sure you want to sign out?</p>

          <div className="modal-action">
            {/* Cancel */}
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>

            {/* Confirm Logout */}
            <form action={signOutAction}>
              <button className="btn btn-error">Yes, Logout</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
