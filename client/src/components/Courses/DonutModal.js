import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Button } from "@mui/material";



export default function DonutModal() {



    return (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}
