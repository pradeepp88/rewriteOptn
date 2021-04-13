import {
  GET_ARTIFACT_START,
  GET_ARTIFACT_SUCCESS,
  GET_ARTIFACT_FAIL,
  CLEAR_ARTIFACTS,
  CALL_ARTIFACT_START,
  CALL_ARTIFACT_SUCCESS,
  CALL_ARTIFACT_FAIL
} from "./constants";

import {
  Artifact,
} from "../../utils/cashscript-utils";

const getArtifactStart = () => ({
  type: GET_ARTIFACT_START,
  payload: null
});

const getArtifactSuccess = (artifact: Artifact) => ({
  type: GET_ARTIFACT_SUCCESS,
  payload: artifact
});

const getArtifactFail = () => ({
  type: GET_ARTIFACT_FAIL,
  payload: null
});

const clearArtifacts = () => ({
  type: CLEAR_ARTIFACTS,
  payload: null
});

const callArtifactStart = () => ({
  type: CALL_ARTIFACT_START,
  payload: null
});

const callArtifactSuccess = (artifact: Artifact) => ({
  type: CALL_ARTIFACT_SUCCESS,
  payload: null
});

const callArtifactFail = () => ({
  type: CALL_ARTIFACT_FAIL,
  payload: null
});