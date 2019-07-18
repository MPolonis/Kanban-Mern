import { connect } from 'react-redux';
import Notes from './Notes';
import { createNoteRequest, editNote, updateNoteRequest, deleteNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  createNote: createNoteRequest,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
    null,
    mapDispatchToProps
)(Notes);
