import * as S from "./style"
import React from "react"


function Modal({ imagem, name, isOpen, setIsOpen, Comics, Eventos, Series, Histórias, Descrição }) {

	return (
		<>
			{isOpen && (
				<S.Cardmodal>
					<S.Buttonclose>
						<button onClick={() => setIsOpen(false)}>X</button>
					</S.Buttonclose>
					<S.Picturemodal>
						<img src={imagem} alt={name} />
					</S.Picturemodal>
					<S.Informationmodal>
						<p>Descrição:{Descrição}</p>
						<p>Comics: {Comics}</p>
						<p>Eventos: {Eventos}</p>
						<p>Series: {Series}</p>
						<p>Histórias: {Histórias}</p>
					</S.Informationmodal>
				</S.Cardmodal>
			)}
		</>
	)
}

export default Modal