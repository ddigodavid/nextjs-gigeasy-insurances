import formatCurrency from "@/utils/currency/formatCurrency";
import { Badge, Button, Card, CardBody, CardFooter, Container } from "@chakra-ui/react";

type Insurance = {
    id: number;
    name: string;
    description: string;
    requirements: string;
    price: number;
}

export default async function InsurancesPage() {
	const response = await fetch('http://localhost:3030/insurances');
	const insurances: Insurance[] = await response.json();

	return (
		<Container className="space-y-4">
			{insurances.map((insurance) => (
				<Card key={insurance.id}>
					<CardBody className="space-y-3">
						<div className="flex justify-between">
							<h2 className="text-lg font-semibold">{insurance.name}</h2>
							<div>
								<Badge colorScheme="green" className="h-content">
									{formatCurrency(String(insurance.price))}
								</Badge>
							</div>
						</div>
						<div>{insurance.description}</div>
					</CardBody>
					<CardFooter className="flex flex-row">
						<div className="basis-3/4 text-sm">
							<span className="font-bold">Requirements:</span> {insurance.requirements}
						</div>
						<div className="basis-1/4 flex justify-end">
							<Button
								size="sm"
								colorScheme='teal'
							>
								+ Add to cart
							</Button>
						</div>
					</CardFooter>
				</Card>
			))}
		</Container>
	);
}