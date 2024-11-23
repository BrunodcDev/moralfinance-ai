import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const LoginPage = async () => {
    const { userId } = await auth();
    if (userId) {
        redirect("/")
    }
    return ( 
        <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            {/* ESQUERDA */}
            <div className="mx-auto flex h-full w-full max-w-[550px] flex-col justify-center p-8">
                <Image
                    src="/Logo.png"
                    width={173}
                    height={39}
                    alt="MoralFinance AI"
                    className="mb-4"
                />
                <h1 className="mb-3 text-3xl md:text-4xl font-bold">Bem-vindo</h1>
                <p className="mb-8 text-sm md:text-base text-muted-foreground">
                    A MoralFinance AI é uma plataforma de gestão financeira que utiliza IA para
                    monitorar suas movimentações, e oferecer insights personalizados,
                    facilitando o controle do seu orçamento.
                </p>
                <SignInButton>
                    <Button className="w-full md:w-auto" variant="outline">
                        <LogInIcon className="mr-2" />
                        Fazer Login ou Criar Conta
                    </Button>
                </SignInButton>
            </div>
            {/* DIREITA */}
            <div className="relative h-[300px] md:h-full w-full">
                <Image 
                    src="/login.png" 
                    alt="Faça login" 
                    fill 
                    className="object-cover rounded-lg md:rounded-none"
                />
            </div>
        </div>
    );
}
 
export default LoginPage;