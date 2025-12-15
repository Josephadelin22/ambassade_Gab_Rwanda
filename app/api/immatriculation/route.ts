// app/api/immatriculations/route.ts
import {NextRequest, NextResponse} from "next/server";
import { success } from "zod";

//Post /api/immatriculations
// cette route recoit les donnees du formulaire d'immatriculation
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // simple console log des donnees recues
        console.log("Nouvelle demande d'immatriculation:", body);

        // enregistrer les donnees dans une base de donnees ou envoyer un email
        // pour l'instant, on simule une reponse reussie
        return NextResponse.json(
            {
                success: true,
                message: "Demande d'immatriculation recue avec succes."
            },
            {status: 200}
        );

    } catch (error) {
        console.error("Erreur Api immatriculation:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Une erreur est survenue lors de la soumission de la demande d'immatriculation."
            },
            {status: 500}
        );
    }
        
} 
