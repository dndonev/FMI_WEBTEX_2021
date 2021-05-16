import { Router, Request, Response } from 'express';
import { PersonModel } from '../../models/user.model';
import { UploadedFile } from 'express-fileupload'
import { join, resolve } from 'path';

const router = Router();

router.post('/create', (req: Request, res: Response) => {
	const person = new PersonModel(req.body);

	// check if person exists

	person.validate()
		.then(() => {
			person.save()
				.then(() => res.sendStatus(204))
				.catch((err) => res.status(500).json(err).send())
		})
		.catch((err) => res.json(err).status(404))
});

router.post('/upload', (req: Request, res: Response) => {
	const uploadedFile: UploadedFile = req.files.file as UploadedFile;
	const downloadPath = join(resolve(), 'misc', uploadedFile.name);
	uploadedFile.mv(downloadPath, (err) => {
		if (err) {
			return res.sendStatus(500);
		}

		return res.sendStatus(204);
	})
});

router.get('/:filename', (req: Request, res: Response) => {
	const fileName: string = req.params.filename;
	const filePath = join(resolve(), 'misc', fileName);
	res.download(filePath);
});

export default router;