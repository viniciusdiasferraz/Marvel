import * as S from "./style"


function Modal({ imagem, name, isOpen, setIsOpen }) {

	return (
		<>
			{ isOpen && (
				<S.Cardmodal>
					<S.Buttonclose>
						<button onClick={() => setIsOpen(false)}>X</button>
					</S.Buttonclose>
					<S.Picturemodal>
						<img src={imagem} alt={name} />
					</S.Picturemodal>
					<S.Informationmodal>
						<p>Comics: {}</p>
						<p>Eventos: {}</p>
						<p>Series: {}</p>
						<p>Histórias: {}</p>
					</S.Informationmodal>
				</S.Cardmodal>
			)}
		</>
	)
}

export default Modal