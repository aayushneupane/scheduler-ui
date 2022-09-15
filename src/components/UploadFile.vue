<template>
  <div id="file">
    <DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
      <label for="file-input">
        <span v-if="dropZoneActive">
          <span>Drop Them Here</span>
          <span class="smaller">to add them</span>
        </span>
        <span v-else>
          <span>Drag Your Files Here</span>
          <span class="smaller">
            or <strong><em>click here</em></strong> to select files
          </span>
        </span>

        <input type="file" id="file-input" multiple @change="onInputChange" />
      </label>
      <ul class="image-list" v-show="files.length">
        <FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
      </ul>
    </DropZone>
    <button @click.prevent="uploadFiles(files, 'https://schedulrapp.com')" class="upload-button">Upload</button>
  </div>
  </template>

<script setup lang="ts">
// Components
import { ref } from 'vue'
import { UploadingFile, FileStatus } from '../models/File'
import { UploadableFile } from '../models/UploadableFile'
import DropZone from './DropZone.vue'
import FilePreview from './FilePreview.vue'

const files = ref<Array<UploadingFile>>([])

// File Management
function onInputChange (e:any) {
  addFiles(e.target.files)
  e.target.value = null // reset so that selecting the same file again will still cause it to fire this change
}

async function uploadFile (file: UploadingFile, url: string) {
  // set up the request data
  const formData = new FormData()
  formData.append('file', file.file)

  // track status and upload file
  file.status = FileStatus.LOADING
  const response = await fetch(url, { method: 'POST', body: formData })

  // change status to indicate the success of the upload request
  file.status = FileStatus.OK

  return response
}

function uploadFiles (files: Array<UploadingFile>, url: string) {
  return Promise.all(files.map((file) => uploadFile(file, url)))
}

function createUploader (url: string) {
  return {
    uploadFile: function (file: UploadingFile) {
      return uploadFile(file, url)
    },
    uploadFiles: function (files: Array<UploadingFile>) {
      return uploadFiles(files, url)
    }
  }
}

function addFiles (newFiles: Array<File>) {
  const newUploadableFiles = [...newFiles].map((file) => new UploadableFile(file)).filter((file) => !fileExists(file.id))
  files.value = files.value.concat(newUploadableFiles)
}

function fileExists (otherId: string) {
  return files.value.some(({ id }) => id === otherId)
}

function removeFile (file: UploadingFile) {
  const index = files.value.indexOf(file)

  if (index > -1) files.value.splice(index, 1)
}

</script>
<!--
<style lang="stylus">
html {
  height: 100%;
  width: 100%;
  background-color: #b6d6f5;
  /* Overlapping Stripes Background, based off https://codepen.io/MinzCode/pen/Exgpqpe */
  --color1: rgba(55, 165, 255, 0.35);
  --color2: rgba(96, 181, 250, 0.35);
  --rotation: 135deg;
  --size: 10px;
  background-blend-mode: multiply;
  background-image: repeating-linear-gradient(
    var(--rotation),
    var(--color1) calc(var(--size) * 0),
    var(--color1) calc(var(--size) * 9),
    var(--color2) calc(var(--size) * 9),
    var(--color2) calc(var(--size) * 12),
    var(--color1) calc(var(--size) * 12)
    ),
    repeating-linear-gradient(
      calc(var(--rotation) + 90deg),
      var(--color1) calc(var(--size) * 0),
      var(--color1) calc(var(--size) * 9),
      var(--color2) calc(var(--size) * 9),
      var(--color2) calc(var(--size) * 12),
      var(--color1) calc(var(--size) * 12)
    );
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style> -->

<!-- <style scoped lang="stylus">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.drop-area {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  background: #ffffff55;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: .2s ease;
  &[data-active=true] {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: #ffffffcc;
  }
}
label {
font-size: 36px;
cursor: pointer;
display: block;
span {
  display: block;
}
input[type=file]:not(:focus-visible) {
  // Visually Hidden Styles taken from Bootstrap 5
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.smaller {
  font-size: 16px;
}
}
.image-list {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
}
.upload-button {
  display: block;
  appearance: none;
  border: 0;
  border-radius: 50px;
  padding: 0.75rem 3rem;
  margin: 1rem auto;
  font-size: 1.25rem;
  font-weight: bold;
  background: #369;
  color: #fff;
  text-transform: uppercase;
}
button {
cursor: pointer;
}
</style> -->
