import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const login = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
      <Head>
        <title>Login - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold ">Sign In</h1>
        <div className="space-y-4">
          <label htmlFor="" className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input text-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-[#9e2323]">This field is required</span>
            )}
          </label>
          <label htmlFor="" className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input text-white"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-[#9e2323]">This field is required</span>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#9e2323] "
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix{"  "}
          <button
            className="cursor-pointer text-white hover:underline"
            type="submit"
            onClick={() => setLogin(false)}
          >
            Click me!
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
