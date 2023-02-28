import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";
import { DropzoneDialogBase } from "material-ui-dropzone";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const FileUpload = (props) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileObjects, setFileObjects] = React.useState([]);

  const sumbit = () => {
    setOpen(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setValue(props.name, fileObjects);
    }, 2000);
  };

  const onDelete = (obj) => {
    let newfiles = fileObjects.filter((data) => {
      return data.file.name !== obj.file.name;
    });
    setFileObjects(newfiles);
  };
  const classes = useStyles();

  return (
    <>
      {loading && <LinearProgress />}
      <span>{props.title}</span>

      <div>
        <Button
          variant="contained"
          style={{
            backgroundColor: props.buttonColor || "blue",
            color: props.textColor || "black",
          }}
          onClick={() => setOpen(true)}
        >
          {props.buttonName}
        </Button>

        <DropzoneDialogBase
          dialogTitle={"Upload"}
          // acceptedFiles={["image/*"]}
          fileObjects={fileObjects}
          cancelButtonText={"cancel"}
          submitButtonText={"submit"}
          maxFileSize={props.maxSize || 30000}
          open={open}
          onAdd={(newFileObjs) => {
            setFileObjects([].concat(fileObjects, newFileObjs));
          }}
          onDelete={(deleteFileObj) => onDelete(deleteFileObj)}
          onClose={() => setOpen(false)}
          onSave={() => sumbit()}
          showFileNamesInPreview={true}
          showPreviews={true}
          showPreviewsInDropzone={false}
          useChipsForPreview
          previewGridProps={{ container: { spacing: 1, direction: "row" } }}
          previewChipProps={{ classes: { root: classes.previewChip } }}
          previewText="Selected files"
        />
      </div>
    </>
  );
};
export default FileUpload;

FileUpload.propTypes = {
  buttonName: PropTypes.string.isRequired,
  maxSize: PropTypes.number,
  title: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
};
