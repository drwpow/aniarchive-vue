export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export enum Country {
  Au = 'AU',
  Br = 'BR',
  Ca = 'CA',
  Cn = 'CN',
  Es = 'ES',
  Fr = 'FR',
  Gb = 'GB',
  It = 'IT',
  Jp = 'JP',
  Mx = 'MX',
  Nz = 'NZ',
  Tr = 'TR',
  Ua = 'UA',
  Us = 'US'
}

export type Film = {
   __typename?: 'Film',
  id: Scalars['String'],
  animators: Array<Person>,
  composers: Array<Person>,
  directors: Array<Person>,
  image: Image,
  releases: Array<Release>,
  releaseYear: Scalars['Int'],
  studio?: Maybe<Studio>,
  title: Scalars['String'],
  titleEN: Scalars['String'],
  titleJP: Scalars['String'],
};


export type FilmAnimatorsArgs = {
  where?: Maybe<FilmAnimatorsWhereInput>,
  orderBy?: Maybe<FilmAnimatorsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmComposersArgs = {
  where?: Maybe<FilmComposersWhereInput>,
  orderBy?: Maybe<FilmComposersOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmDirectorsArgs = {
  where?: Maybe<FilmDirectorsWhereInput>,
  orderBy?: Maybe<FilmDirectorsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmReleasesArgs = {
  orderBy?: Maybe<FilmReleasesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type FilmAnimatorsOrderByInput = {
  alias?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  lastName?: Maybe<OrderByArg>,
};

export type FilmAnimatorsWhereInput = {
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
};

export type FilmComposersOrderByInput = {
  alias?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  lastName?: Maybe<OrderByArg>,
};

export type FilmComposersWhereInput = {
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
};

export type FilmCreateInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateManyWithoutAnimatedInput = {
  create?: Maybe<Array<FilmCreateWithoutPersonInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutComposedInput = {
  create?: Maybe<Array<FilmCreateWithoutComposersInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutDirectedInput = {
  create?: Maybe<Array<FilmCreateWithoutDirectorsInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutFilmsInput = {
  create?: Maybe<Array<FilmCreateWithoutStudioInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateOneWithoutFilmInput = {
  create?: Maybe<FilmCreateWithoutAnimatorsInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
};

export type FilmCreateWithoutAnimatorsInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateWithoutComposersInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateWithoutDirectorsInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateWithoutFrameSequencesInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateWithoutImageInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateWithoutPersonInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
};

export type FilmCreateWithoutReleasesInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  studio?: Maybe<StudioCreateOneWithoutStudioInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmCreateWithoutStudioInput = {
  id: Scalars['String'],
  releaseYear: Scalars['Int'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  animators?: Maybe<PersonCreateManyWithoutAnimatorsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposersInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectorsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  image: ImageCreateOneWithoutImageInput,
  releases?: Maybe<ReleaseCreateManyWithoutReleasesInput>,
  person?: Maybe<PersonCreateOneWithoutPersonInput>,
};

export type FilmDirectorsOrderByInput = {
  alias?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  lastName?: Maybe<OrderByArg>,
};

export type FilmDirectorsWhereInput = {
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
};

export type FilmFilter = {
  every?: Maybe<FilmWhereInput>,
  some?: Maybe<FilmWhereInput>,
  none?: Maybe<FilmWhereInput>,
};

export type FilmReleasesOrderByInput = {
  releaseYear?: Maybe<OrderByArg>,
};

export type FilmScalarWhereInput = {
  id?: Maybe<StringFilter>,
  animators?: Maybe<PersonFilter>,
  composers?: Maybe<PersonFilter>,
  directors?: Maybe<PersonFilter>,
  frameSequences?: Maybe<FrameSequenceFilter>,
  releases?: Maybe<ReleaseFilter>,
  releaseYear?: Maybe<IntFilter>,
  title?: Maybe<StringFilter>,
  titleJP?: Maybe<StringFilter>,
  titleEN?: Maybe<StringFilter>,
  AND?: Maybe<Array<FilmScalarWhereInput>>,
  OR?: Maybe<Array<FilmScalarWhereInput>>,
  NOT?: Maybe<Array<FilmScalarWhereInput>>,
};

export type FilmUpdateInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
};

export type FilmUpdateManyWithoutComposersInput = {
  create?: Maybe<Array<FilmCreateWithoutComposersInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
  set?: Maybe<Array<FilmWhereUniqueInput>>,
  disconnect?: Maybe<Array<FilmWhereUniqueInput>>,
  delete?: Maybe<Array<FilmWhereUniqueInput>>,
  update?: Maybe<Array<FilmUpdateWithWhereUniqueWithoutComposersInput>>,
  updateMany?: Maybe<Array<FilmUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FilmScalarWhereInput>>,
  upsert?: Maybe<Array<FilmUpsertWithWhereUniqueWithoutComposersInput>>,
};

export type FilmUpdateManyWithoutDirectorsInput = {
  create?: Maybe<Array<FilmCreateWithoutDirectorsInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
  set?: Maybe<Array<FilmWhereUniqueInput>>,
  disconnect?: Maybe<Array<FilmWhereUniqueInput>>,
  delete?: Maybe<Array<FilmWhereUniqueInput>>,
  update?: Maybe<Array<FilmUpdateWithWhereUniqueWithoutDirectorsInput>>,
  updateMany?: Maybe<Array<FilmUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FilmScalarWhereInput>>,
  upsert?: Maybe<Array<FilmUpsertWithWhereUniqueWithoutDirectorsInput>>,
};

export type FilmUpdateManyWithoutImageInput = {
  create?: Maybe<Array<FilmCreateWithoutImageInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
  set?: Maybe<Array<FilmWhereUniqueInput>>,
  disconnect?: Maybe<Array<FilmWhereUniqueInput>>,
  delete?: Maybe<Array<FilmWhereUniqueInput>>,
  update?: Maybe<Array<FilmUpdateWithWhereUniqueWithoutImageInput>>,
  updateMany?: Maybe<Array<FilmUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FilmScalarWhereInput>>,
  upsert?: Maybe<Array<FilmUpsertWithWhereUniqueWithoutImageInput>>,
};

export type FilmUpdateManyWithoutPersonInput = {
  create?: Maybe<Array<FilmCreateWithoutPersonInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
  set?: Maybe<Array<FilmWhereUniqueInput>>,
  disconnect?: Maybe<Array<FilmWhereUniqueInput>>,
  delete?: Maybe<Array<FilmWhereUniqueInput>>,
  update?: Maybe<Array<FilmUpdateWithWhereUniqueWithoutPersonInput>>,
  updateMany?: Maybe<Array<FilmUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FilmScalarWhereInput>>,
  upsert?: Maybe<Array<FilmUpsertWithWhereUniqueWithoutPersonInput>>,
};

export type FilmUpdateManyWithoutStudioInput = {
  create?: Maybe<Array<FilmCreateWithoutStudioInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
  set?: Maybe<Array<FilmWhereUniqueInput>>,
  disconnect?: Maybe<Array<FilmWhereUniqueInput>>,
  delete?: Maybe<Array<FilmWhereUniqueInput>>,
  update?: Maybe<Array<FilmUpdateWithWhereUniqueWithoutStudioInput>>,
  updateMany?: Maybe<Array<FilmUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FilmScalarWhereInput>>,
  upsert?: Maybe<Array<FilmUpsertWithWhereUniqueWithoutStudioInput>>,
};

export type FilmUpdateManyWithWhereNestedInput = {
  where: FilmScalarWhereInput,
  data: FilmUpdateManyDataInput,
};

export type FilmUpdateOneRequiredWithoutFrameSequencesInput = {
  create?: Maybe<FilmCreateWithoutFrameSequencesInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
  update?: Maybe<FilmUpdateWithoutFrameSequencesDataInput>,
  upsert?: Maybe<FilmUpsertWithoutFrameSequencesInput>,
};

export type FilmUpdateOneRequiredWithoutReleasesInput = {
  create?: Maybe<FilmCreateWithoutReleasesInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
  update?: Maybe<FilmUpdateWithoutReleasesDataInput>,
  upsert?: Maybe<FilmUpsertWithoutReleasesInput>,
};

export type FilmUpdateOneWithoutAnimatorsInput = {
  create?: Maybe<FilmCreateWithoutAnimatorsInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<FilmUpdateWithoutAnimatorsDataInput>,
  upsert?: Maybe<FilmUpsertWithoutAnimatorsInput>,
};

export type FilmUpdateWithoutAnimatorsDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithoutComposersDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithoutDirectorsDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithoutFrameSequencesDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithoutPersonDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
};

export type FilmUpdateWithoutReleasesDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithoutStudioDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  animators?: Maybe<PersonUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutFilmInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  person?: Maybe<PersonUpdateOneWithoutAnimatedInput>,
};

export type FilmUpdateWithWhereUniqueWithoutComposersInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutComposersDataInput,
};

export type FilmUpdateWithWhereUniqueWithoutDirectorsInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutDirectorsDataInput,
};

export type FilmUpdateWithWhereUniqueWithoutImageInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutImageDataInput,
};

export type FilmUpdateWithWhereUniqueWithoutPersonInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutPersonDataInput,
};

export type FilmUpdateWithWhereUniqueWithoutStudioInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutStudioDataInput,
};

export type FilmUpsertWithoutAnimatorsInput = {
  update: FilmUpdateWithoutAnimatorsDataInput,
  create: FilmCreateWithoutAnimatorsInput,
};

export type FilmUpsertWithoutFrameSequencesInput = {
  update: FilmUpdateWithoutFrameSequencesDataInput,
  create: FilmCreateWithoutFrameSequencesInput,
};

export type FilmUpsertWithoutReleasesInput = {
  update: FilmUpdateWithoutReleasesDataInput,
  create: FilmCreateWithoutReleasesInput,
};

export type FilmUpsertWithWhereUniqueWithoutComposersInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutComposersDataInput,
  create: FilmCreateWithoutComposersInput,
};

export type FilmUpsertWithWhereUniqueWithoutDirectorsInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutDirectorsDataInput,
  create: FilmCreateWithoutDirectorsInput,
};

export type FilmUpsertWithWhereUniqueWithoutImageInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutImageDataInput,
  create: FilmCreateWithoutImageInput,
};

export type FilmUpsertWithWhereUniqueWithoutPersonInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutPersonDataInput,
  create: FilmCreateWithoutPersonInput,
};

export type FilmUpsertWithWhereUniqueWithoutStudioInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutStudioDataInput,
  create: FilmCreateWithoutStudioInput,
};

export type FilmWhereInput = {
  id?: Maybe<StringFilter>,
  animators?: Maybe<PersonFilter>,
  composers?: Maybe<PersonFilter>,
  directors?: Maybe<PersonFilter>,
  frameSequences?: Maybe<FrameSequenceFilter>,
  releases?: Maybe<ReleaseFilter>,
  releaseYear?: Maybe<IntFilter>,
  title?: Maybe<StringFilter>,
  titleJP?: Maybe<StringFilter>,
  titleEN?: Maybe<StringFilter>,
  AND?: Maybe<Array<FilmWhereInput>>,
  OR?: Maybe<Array<FilmWhereInput>>,
  NOT?: Maybe<Array<FilmWhereInput>>,
  image?: Maybe<ImageWhereInput>,
  studio?: Maybe<StudioWhereInput>,
  person?: Maybe<PersonWhereInput>,
};

export type FilmWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
};

export type FrameSequenceCreateManyWithoutFrameSequencesInput = {
  create?: Maybe<Array<FrameSequenceCreateWithoutFilmInput>>,
  connect?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
};

export type FrameSequenceCreateOneWithoutFrameSequenceInput = {
  create?: Maybe<FrameSequenceCreateWithoutArtistsInput>,
  connect?: Maybe<FrameSequenceWhereUniqueInput>,
};

export type FrameSequenceCreateWithoutArtistsInput = {
  id?: Maybe<Scalars['ID']>,
  notes: Scalars['String'],
  order: Scalars['Int'],
  video: Scalars['String'],
  film: FilmCreateOneWithoutFilmInput,
  image: ImageCreateOneWithoutImageInput,
};

export type FrameSequenceCreateWithoutFilmInput = {
  id?: Maybe<Scalars['ID']>,
  notes: Scalars['String'],
  order: Scalars['Int'],
  video: Scalars['String'],
  artists?: Maybe<PersonCreateManyWithoutArtistsInput>,
  image: ImageCreateOneWithoutImageInput,
};

export type FrameSequenceCreateWithoutImageInput = {
  id?: Maybe<Scalars['ID']>,
  notes: Scalars['String'],
  order: Scalars['Int'],
  video: Scalars['String'],
  artists?: Maybe<PersonCreateManyWithoutArtistsInput>,
  film: FilmCreateOneWithoutFilmInput,
};

export type FrameSequenceFilter = {
  every?: Maybe<FrameSequenceWhereInput>,
  some?: Maybe<FrameSequenceWhereInput>,
  none?: Maybe<FrameSequenceWhereInput>,
};

export type FrameSequenceScalarWhereInput = {
  id?: Maybe<StringFilter>,
  artists?: Maybe<PersonFilter>,
  notes?: Maybe<StringFilter>,
  order?: Maybe<IntFilter>,
  video?: Maybe<StringFilter>,
  AND?: Maybe<Array<FrameSequenceScalarWhereInput>>,
  OR?: Maybe<Array<FrameSequenceScalarWhereInput>>,
  NOT?: Maybe<Array<FrameSequenceScalarWhereInput>>,
};

export type FrameSequenceUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  video?: Maybe<Scalars['String']>,
};

export type FrameSequenceUpdateManyWithoutFilmInput = {
  create?: Maybe<Array<FrameSequenceCreateWithoutFilmInput>>,
  connect?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  set?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  disconnect?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  delete?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  update?: Maybe<Array<FrameSequenceUpdateWithWhereUniqueWithoutFilmInput>>,
  updateMany?: Maybe<Array<FrameSequenceUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FrameSequenceScalarWhereInput>>,
  upsert?: Maybe<Array<FrameSequenceUpsertWithWhereUniqueWithoutFilmInput>>,
};

export type FrameSequenceUpdateManyWithoutImageInput = {
  create?: Maybe<Array<FrameSequenceCreateWithoutImageInput>>,
  connect?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  set?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  disconnect?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  delete?: Maybe<Array<FrameSequenceWhereUniqueInput>>,
  update?: Maybe<Array<FrameSequenceUpdateWithWhereUniqueWithoutImageInput>>,
  updateMany?: Maybe<Array<FrameSequenceUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FrameSequenceScalarWhereInput>>,
  upsert?: Maybe<Array<FrameSequenceUpsertWithWhereUniqueWithoutImageInput>>,
};

export type FrameSequenceUpdateManyWithWhereNestedInput = {
  where: FrameSequenceScalarWhereInput,
  data: FrameSequenceUpdateManyDataInput,
};

export type FrameSequenceUpdateOneWithoutArtistsInput = {
  create?: Maybe<FrameSequenceCreateWithoutArtistsInput>,
  connect?: Maybe<FrameSequenceWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<FrameSequenceUpdateWithoutArtistsDataInput>,
  upsert?: Maybe<FrameSequenceUpsertWithoutArtistsInput>,
};

export type FrameSequenceUpdateWithoutArtistsDataInput = {
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  video?: Maybe<Scalars['String']>,
  film?: Maybe<FilmUpdateOneRequiredWithoutFrameSequencesInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFrameSequencesInput>,
};

export type FrameSequenceUpdateWithoutFilmDataInput = {
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  video?: Maybe<Scalars['String']>,
  artists?: Maybe<PersonUpdateManyWithoutFrameSequenceInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFrameSequencesInput>,
};

export type FrameSequenceUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
  video?: Maybe<Scalars['String']>,
  artists?: Maybe<PersonUpdateManyWithoutFrameSequenceInput>,
  film?: Maybe<FilmUpdateOneRequiredWithoutFrameSequencesInput>,
};

export type FrameSequenceUpdateWithWhereUniqueWithoutFilmInput = {
  where: FrameSequenceWhereUniqueInput,
  data: FrameSequenceUpdateWithoutFilmDataInput,
};

export type FrameSequenceUpdateWithWhereUniqueWithoutImageInput = {
  where: FrameSequenceWhereUniqueInput,
  data: FrameSequenceUpdateWithoutImageDataInput,
};

export type FrameSequenceUpsertWithoutArtistsInput = {
  update: FrameSequenceUpdateWithoutArtistsDataInput,
  create: FrameSequenceCreateWithoutArtistsInput,
};

export type FrameSequenceUpsertWithWhereUniqueWithoutFilmInput = {
  where: FrameSequenceWhereUniqueInput,
  update: FrameSequenceUpdateWithoutFilmDataInput,
  create: FrameSequenceCreateWithoutFilmInput,
};

export type FrameSequenceUpsertWithWhereUniqueWithoutImageInput = {
  where: FrameSequenceWhereUniqueInput,
  update: FrameSequenceUpdateWithoutImageDataInput,
  create: FrameSequenceCreateWithoutImageInput,
};

export type FrameSequenceWhereInput = {
  id?: Maybe<StringFilter>,
  artists?: Maybe<PersonFilter>,
  notes?: Maybe<StringFilter>,
  order?: Maybe<IntFilter>,
  video?: Maybe<StringFilter>,
  AND?: Maybe<Array<FrameSequenceWhereInput>>,
  OR?: Maybe<Array<FrameSequenceWhereInput>>,
  NOT?: Maybe<Array<FrameSequenceWhereInput>>,
  film?: Maybe<FilmWhereInput>,
  image?: Maybe<ImageWhereInput>,
};

export type FrameSequenceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Image = {
   __typename?: 'Image',
  id: Scalars['ID'],
  copyright?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  url: Scalars['String'],
};

export type ImageCreateManyWithoutImagesInput = {
  create?: Maybe<Array<ImageCreateWithoutReleaseInput>>,
  connect?: Maybe<Array<ImageWhereUniqueInput>>,
};

export type ImageCreateOneWithoutImageInput = {
  create?: Maybe<ImageCreateWithoutFilmsInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
};

export type ImageCreateWithoutFilmsInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  url: Scalars['String'],
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  persons?: Maybe<PersonCreateManyWithoutPersonsInput>,
  release?: Maybe<ReleaseCreateOneWithoutReleaseInput>,
  studios?: Maybe<StudioCreateManyWithoutStudiosInput>,
};

export type ImageCreateWithoutFrameSequencesInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  persons?: Maybe<PersonCreateManyWithoutPersonsInput>,
  release?: Maybe<ReleaseCreateOneWithoutReleaseInput>,
  studios?: Maybe<StudioCreateManyWithoutStudiosInput>,
};

export type ImageCreateWithoutPersonsInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  release?: Maybe<ReleaseCreateOneWithoutReleaseInput>,
  studios?: Maybe<StudioCreateManyWithoutStudiosInput>,
};

export type ImageCreateWithoutReleaseInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  persons?: Maybe<PersonCreateManyWithoutPersonsInput>,
  studios?: Maybe<StudioCreateManyWithoutStudiosInput>,
};

export type ImageCreateWithoutStudiosInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  frameSequences?: Maybe<FrameSequenceCreateManyWithoutFrameSequencesInput>,
  persons?: Maybe<PersonCreateManyWithoutPersonsInput>,
  release?: Maybe<ReleaseCreateOneWithoutReleaseInput>,
};

export type ImageFilter = {
  every?: Maybe<ImageWhereInput>,
  some?: Maybe<ImageWhereInput>,
  none?: Maybe<ImageWhereInput>,
};

export type ImageScalarWhereInput = {
  id?: Maybe<StringFilter>,
  copyright?: Maybe<NullableStringFilter>,
  name?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  films?: Maybe<FilmFilter>,
  frameSequences?: Maybe<FrameSequenceFilter>,
  persons?: Maybe<PersonFilter>,
  studios?: Maybe<StudioFilter>,
  AND?: Maybe<Array<ImageScalarWhereInput>>,
  OR?: Maybe<Array<ImageScalarWhereInput>>,
  NOT?: Maybe<Array<ImageScalarWhereInput>>,
};

export type ImageUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageUpdateManyWithoutReleaseInput = {
  create?: Maybe<Array<ImageCreateWithoutReleaseInput>>,
  connect?: Maybe<Array<ImageWhereUniqueInput>>,
  set?: Maybe<Array<ImageWhereUniqueInput>>,
  disconnect?: Maybe<Array<ImageWhereUniqueInput>>,
  delete?: Maybe<Array<ImageWhereUniqueInput>>,
  update?: Maybe<Array<ImageUpdateWithWhereUniqueWithoutReleaseInput>>,
  updateMany?: Maybe<Array<ImageUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ImageScalarWhereInput>>,
  upsert?: Maybe<Array<ImageUpsertWithWhereUniqueWithoutReleaseInput>>,
};

export type ImageUpdateManyWithWhereNestedInput = {
  where: ImageScalarWhereInput,
  data: ImageUpdateManyDataInput,
};

export type ImageUpdateOneRequiredWithoutFilmsInput = {
  create?: Maybe<ImageCreateWithoutFilmsInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
  update?: Maybe<ImageUpdateWithoutFilmsDataInput>,
  upsert?: Maybe<ImageUpsertWithoutFilmsInput>,
};

export type ImageUpdateOneRequiredWithoutFrameSequencesInput = {
  create?: Maybe<ImageCreateWithoutFrameSequencesInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
  update?: Maybe<ImageUpdateWithoutFrameSequencesDataInput>,
  upsert?: Maybe<ImageUpsertWithoutFrameSequencesInput>,
};

export type ImageUpdateOneWithoutPersonsInput = {
  create?: Maybe<ImageCreateWithoutPersonsInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ImageUpdateWithoutPersonsDataInput>,
  upsert?: Maybe<ImageUpsertWithoutPersonsInput>,
};

export type ImageUpdateOneWithoutStudiosInput = {
  create?: Maybe<ImageCreateWithoutStudiosInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ImageUpdateWithoutStudiosDataInput>,
  upsert?: Maybe<ImageUpsertWithoutStudiosInput>,
};

export type ImageUpdateWithoutFilmsDataInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutFrameSequencesDataInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutPersonsDataInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutReleaseDataInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutStudiosDataInput = {
  id?: Maybe<Scalars['ID']>,
  copyright?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  frameSequences?: Maybe<FrameSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
};

export type ImageUpdateWithWhereUniqueWithoutReleaseInput = {
  where: ImageWhereUniqueInput,
  data: ImageUpdateWithoutReleaseDataInput,
};

export type ImageUpsertWithoutFilmsInput = {
  update: ImageUpdateWithoutFilmsDataInput,
  create: ImageCreateWithoutFilmsInput,
};

export type ImageUpsertWithoutFrameSequencesInput = {
  update: ImageUpdateWithoutFrameSequencesDataInput,
  create: ImageCreateWithoutFrameSequencesInput,
};

export type ImageUpsertWithoutPersonsInput = {
  update: ImageUpdateWithoutPersonsDataInput,
  create: ImageCreateWithoutPersonsInput,
};

export type ImageUpsertWithoutStudiosInput = {
  update: ImageUpdateWithoutStudiosDataInput,
  create: ImageCreateWithoutStudiosInput,
};

export type ImageUpsertWithWhereUniqueWithoutReleaseInput = {
  where: ImageWhereUniqueInput,
  update: ImageUpdateWithoutReleaseDataInput,
  create: ImageCreateWithoutReleaseInput,
};

export type ImageWhereInput = {
  id?: Maybe<StringFilter>,
  copyright?: Maybe<NullableStringFilter>,
  name?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  films?: Maybe<FilmFilter>,
  frameSequences?: Maybe<FrameSequenceFilter>,
  persons?: Maybe<PersonFilter>,
  studios?: Maybe<StudioFilter>,
  AND?: Maybe<Array<ImageWhereInput>>,
  OR?: Maybe<Array<ImageWhereInput>>,
  NOT?: Maybe<Array<ImageWhereInput>>,
  release?: Maybe<ReleaseWhereInput>,
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createOneFilm: Film,
  createOnePerson: Person,
  createOneRelease: Release,
  createOneStudio: Studio,
  deleteOneFilm?: Maybe<Film>,
  deleteOnePerson?: Maybe<Person>,
  deleteOneRelease?: Maybe<Release>,
  deleteOneStudio?: Maybe<Studio>,
  updateOneFilm?: Maybe<Film>,
  updateOnePerson?: Maybe<Person>,
  updateOneRelease?: Maybe<Release>,
  updateOneStudio?: Maybe<Studio>,
};


export type MutationCreateOneFilmArgs = {
  data: FilmCreateInput
};


export type MutationCreateOnePersonArgs = {
  data: PersonCreateInput
};


export type MutationCreateOneReleaseArgs = {
  data: ReleaseCreateInput
};


export type MutationCreateOneStudioArgs = {
  data: StudioCreateInput
};


export type MutationDeleteOneFilmArgs = {
  where: FilmWhereUniqueInput
};


export type MutationDeleteOnePersonArgs = {
  where: PersonWhereUniqueInput
};


export type MutationDeleteOneReleaseArgs = {
  where: ReleaseWhereUniqueInput
};


export type MutationDeleteOneStudioArgs = {
  where: StudioWhereUniqueInput
};


export type MutationUpdateOneFilmArgs = {
  data: FilmUpdateInput,
  where: FilmWhereUniqueInput
};


export type MutationUpdateOnePersonArgs = {
  data: PersonUpdateInput,
  where: PersonWhereUniqueInput
};


export type MutationUpdateOneReleaseArgs = {
  data: ReleaseUpdateInput,
  where: ReleaseWhereUniqueInput
};


export type MutationUpdateOneStudioArgs = {
  data: StudioUpdateInput,
  where: StudioWhereUniqueInput
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Person = {
   __typename?: 'Person',
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  animated: Array<Film>,
  birthDay?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  composed: Array<Film>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  directed: Array<Film>,
  firstName: Scalars['String'],
  founded: Array<Studio>,
  image?: Maybe<Image>,
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
};


export type PersonAnimatedArgs = {
  where?: Maybe<PersonAnimatedWhereInput>,
  orderBy?: Maybe<PersonAnimatedOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonComposedArgs = {
  where?: Maybe<PersonComposedWhereInput>,
  orderBy?: Maybe<PersonComposedOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonDirectedArgs = {
  where?: Maybe<PersonDirectedWhereInput>,
  orderBy?: Maybe<PersonDirectedOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonFoundedArgs = {
  where?: Maybe<PersonFoundedWhereInput>,
  orderBy?: Maybe<PersonFoundedOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PersonAnimatedOrderByInput = {
  releaseYear?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
};

export type PersonAnimatedWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type PersonComposedOrderByInput = {
  releaseYear?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
};

export type PersonComposedWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type PersonCreateInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonCreateManyWithoutAnimatorsInput = {
  create?: Maybe<Array<PersonCreateWithoutFilmInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutArtistsInput = {
  create?: Maybe<Array<PersonCreateWithoutFrameSequenceInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutComposersInput = {
  create?: Maybe<Array<PersonCreateWithoutComposedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutDirectorsInput = {
  create?: Maybe<Array<PersonCreateWithoutDirectedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutFoundersInput = {
  create?: Maybe<Array<PersonCreateWithoutFoundedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutPersonsInput = {
  create?: Maybe<Array<PersonCreateWithoutImageInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateOneWithoutPersonInput = {
  create?: Maybe<PersonCreateWithoutAnimatedInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateWithoutAnimatedInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonCreateWithoutComposedInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonCreateWithoutDirectedInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonCreateWithoutFilmInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonCreateWithoutFoundedInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonCreateWithoutFrameSequenceInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
};

export type PersonCreateWithoutImageInput = {
  id: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country: Country,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  lastName: Scalars['String'],
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmCreateManyWithoutAnimatedInput>,
  composed?: Maybe<FilmCreateManyWithoutComposedInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectedInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundedInput>,
  film?: Maybe<FilmCreateOneWithoutFilmInput>,
  frameSequence?: Maybe<FrameSequenceCreateOneWithoutFrameSequenceInput>,
};

export type PersonDirectedOrderByInput = {
  releaseYear?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
};

export type PersonDirectedWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type PersonFilter = {
  every?: Maybe<PersonWhereInput>,
  some?: Maybe<PersonWhereInput>,
  none?: Maybe<PersonWhereInput>,
};

export type PersonFoundedOrderByInput = {
  foundedYear?: Maybe<OrderByArg>,
  name?: Maybe<OrderByArg>,
};

export type PersonFoundedWhereInput = {
  country?: Maybe<Country>,
  foundedYear?: Maybe<IntFilter>,
};

export type PersonScalarWhereInput = {
  id?: Maybe<StringFilter>,
  alias?: Maybe<NullableStringFilter>,
  animated?: Maybe<FilmFilter>,
  birthMonth?: Maybe<NullableIntFilter>,
  birthDay?: Maybe<NullableIntFilter>,
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
  composed?: Maybe<FilmFilter>,
  directed?: Maybe<FilmFilter>,
  deathDay?: Maybe<NullableIntFilter>,
  deathMonth?: Maybe<NullableIntFilter>,
  deathYear?: Maybe<NullableIntFilter>,
  description?: Maybe<NullableStringFilter>,
  firstName?: Maybe<StringFilter>,
  founded?: Maybe<StudioFilter>,
  kanji?: Maybe<NullableStringFilter>,
  lastName?: Maybe<StringFilter>,
  website?: Maybe<NullableStringFilter>,
  AND?: Maybe<Array<PersonScalarWhereInput>>,
  OR?: Maybe<Array<PersonScalarWhereInput>>,
  NOT?: Maybe<Array<PersonScalarWhereInput>>,
};

export type PersonUpdateInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
};

export type PersonUpdateManyWithoutComposedInput = {
  create?: Maybe<Array<PersonCreateWithoutComposedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutComposedInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutComposedInput>>,
};

export type PersonUpdateManyWithoutDirectedInput = {
  create?: Maybe<Array<PersonCreateWithoutDirectedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutDirectedInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutDirectedInput>>,
};

export type PersonUpdateManyWithoutFilmInput = {
  create?: Maybe<Array<PersonCreateWithoutFilmInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutFilmInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutFilmInput>>,
};

export type PersonUpdateManyWithoutFoundedInput = {
  create?: Maybe<Array<PersonCreateWithoutFoundedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutFoundedInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutFoundedInput>>,
};

export type PersonUpdateManyWithoutFrameSequenceInput = {
  create?: Maybe<Array<PersonCreateWithoutFrameSequenceInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutFrameSequenceInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutFrameSequenceInput>>,
};

export type PersonUpdateManyWithoutImageInput = {
  create?: Maybe<Array<PersonCreateWithoutImageInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutImageInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutImageInput>>,
};

export type PersonUpdateManyWithWhereNestedInput = {
  where: PersonScalarWhereInput,
  data: PersonUpdateManyDataInput,
};

export type PersonUpdateOneWithoutAnimatedInput = {
  create?: Maybe<PersonCreateWithoutAnimatedInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutAnimatedDataInput>,
  upsert?: Maybe<PersonUpsertWithoutAnimatedInput>,
};

export type PersonUpdateWithoutAnimatedDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateWithoutComposedDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateWithoutDirectedDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateWithoutFilmDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateWithoutFoundedDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateWithoutFrameSequenceDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
};

export type PersonUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  birthYear?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  deathDay?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  animated?: Maybe<FilmUpdateManyWithoutPersonInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
  film?: Maybe<FilmUpdateOneWithoutAnimatorsInput>,
  frameSequence?: Maybe<FrameSequenceUpdateOneWithoutArtistsInput>,
};

export type PersonUpdateWithWhereUniqueWithoutComposedInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutComposedDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutDirectedInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutDirectedDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutFilmInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutFilmDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutFoundedInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutFoundedDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutFrameSequenceInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutFrameSequenceDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutImageInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutImageDataInput,
};

export type PersonUpsertWithoutAnimatedInput = {
  update: PersonUpdateWithoutAnimatedDataInput,
  create: PersonCreateWithoutAnimatedInput,
};

export type PersonUpsertWithWhereUniqueWithoutComposedInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutComposedDataInput,
  create: PersonCreateWithoutComposedInput,
};

export type PersonUpsertWithWhereUniqueWithoutDirectedInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutDirectedDataInput,
  create: PersonCreateWithoutDirectedInput,
};

export type PersonUpsertWithWhereUniqueWithoutFilmInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutFilmDataInput,
  create: PersonCreateWithoutFilmInput,
};

export type PersonUpsertWithWhereUniqueWithoutFoundedInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutFoundedDataInput,
  create: PersonCreateWithoutFoundedInput,
};

export type PersonUpsertWithWhereUniqueWithoutFrameSequenceInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutFrameSequenceDataInput,
  create: PersonCreateWithoutFrameSequenceInput,
};

export type PersonUpsertWithWhereUniqueWithoutImageInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutImageDataInput,
  create: PersonCreateWithoutImageInput,
};

export type PersonWhereInput = {
  id?: Maybe<StringFilter>,
  alias?: Maybe<NullableStringFilter>,
  animated?: Maybe<FilmFilter>,
  birthMonth?: Maybe<NullableIntFilter>,
  birthDay?: Maybe<NullableIntFilter>,
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
  composed?: Maybe<FilmFilter>,
  directed?: Maybe<FilmFilter>,
  deathDay?: Maybe<NullableIntFilter>,
  deathMonth?: Maybe<NullableIntFilter>,
  deathYear?: Maybe<NullableIntFilter>,
  description?: Maybe<NullableStringFilter>,
  firstName?: Maybe<StringFilter>,
  founded?: Maybe<StudioFilter>,
  kanji?: Maybe<NullableStringFilter>,
  lastName?: Maybe<StringFilter>,
  website?: Maybe<NullableStringFilter>,
  AND?: Maybe<Array<PersonWhereInput>>,
  OR?: Maybe<Array<PersonWhereInput>>,
  NOT?: Maybe<Array<PersonWhereInput>>,
  image?: Maybe<ImageWhereInput>,
  film?: Maybe<FilmWhereInput>,
  frameSequence?: Maybe<FrameSequenceWhereInput>,
};

export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  film?: Maybe<Film>,
  films: Array<Film>,
  people: Array<Person>,
  person?: Maybe<Person>,
  studio?: Maybe<Studio>,
  studios: Array<Studio>,
};


export type QueryFilmArgs = {
  where: FilmWhereUniqueInput
};


export type QueryFilmsArgs = {
  where?: Maybe<QueryFilmsWhereInput>,
  orderBy?: Maybe<QueryFilmsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPeopleArgs = {
  where?: Maybe<QueryPeopleWhereInput>,
  orderBy?: Maybe<QueryPeopleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput
};


export type QueryStudioArgs = {
  where: StudioWhereUniqueInput
};


export type QueryStudiosArgs = {
  where?: Maybe<QueryStudiosWhereInput>,
  orderBy?: Maybe<QueryStudiosOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type QueryFilmsOrderByInput = {
  releaseYear?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
};

export type QueryFilmsWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type QueryPeopleOrderByInput = {
  alias?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  lastName?: Maybe<OrderByArg>,
};

export type QueryPeopleWhereInput = {
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
};

export type QueryStudiosOrderByInput = {
  foundedYear?: Maybe<OrderByArg>,
  name?: Maybe<OrderByArg>,
};

export type QueryStudiosWhereInput = {
  country?: Maybe<Country>,
  foundedYear?: Maybe<IntFilter>,
};

export type Release = {
   __typename?: 'Release',
  id: Scalars['ID'],
  country: Country,
  film: Film,
  format: Scalars['String'],
  images: Array<Image>,
  notes?: Maybe<Scalars['String']>,
  region: Scalars['String'],
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear: Scalars['Int'],
  runtime: Scalars['Int'],
};


export type ReleaseImagesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ReleaseCreateInput = {
  id?: Maybe<Scalars['ID']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  region: Scalars['String'],
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear: Scalars['Int'],
  runtime: Scalars['Int'],
  film: FilmCreateOneWithoutFilmInput,
  images?: Maybe<ImageCreateManyWithoutImagesInput>,
};

export type ReleaseCreateManyWithoutReleasesInput = {
  create?: Maybe<Array<ReleaseCreateWithoutFilmInput>>,
  connect?: Maybe<Array<ReleaseWhereUniqueInput>>,
};

export type ReleaseCreateOneWithoutReleaseInput = {
  create?: Maybe<ReleaseCreateWithoutImagesInput>,
  connect?: Maybe<ReleaseWhereUniqueInput>,
};

export type ReleaseCreateWithoutFilmInput = {
  id?: Maybe<Scalars['ID']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  region: Scalars['String'],
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear: Scalars['Int'],
  runtime: Scalars['Int'],
  images?: Maybe<ImageCreateManyWithoutImagesInput>,
};

export type ReleaseCreateWithoutImagesInput = {
  id?: Maybe<Scalars['ID']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  region: Scalars['String'],
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear: Scalars['Int'],
  runtime: Scalars['Int'],
  film: FilmCreateOneWithoutFilmInput,
};

export type ReleaseFilter = {
  every?: Maybe<ReleaseWhereInput>,
  some?: Maybe<ReleaseWhereInput>,
  none?: Maybe<ReleaseWhereInput>,
};

export type ReleaseScalarWhereInput = {
  id?: Maybe<StringFilter>,
  country?: Maybe<Country>,
  format?: Maybe<StringFilter>,
  images?: Maybe<ImageFilter>,
  notes?: Maybe<NullableStringFilter>,
  region?: Maybe<StringFilter>,
  releaseDay?: Maybe<NullableIntFilter>,
  releaseMonth?: Maybe<NullableIntFilter>,
  releaseYear?: Maybe<IntFilter>,
  runtime?: Maybe<IntFilter>,
  AND?: Maybe<Array<ReleaseScalarWhereInput>>,
  OR?: Maybe<Array<ReleaseScalarWhereInput>>,
  NOT?: Maybe<Array<ReleaseScalarWhereInput>>,
};

export type ReleaseUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear?: Maybe<Scalars['Int']>,
  runtime?: Maybe<Scalars['Int']>,
  film?: Maybe<FilmUpdateOneRequiredWithoutReleasesInput>,
  images?: Maybe<ImageUpdateManyWithoutReleaseInput>,
};

export type ReleaseUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear?: Maybe<Scalars['Int']>,
  runtime?: Maybe<Scalars['Int']>,
};

export type ReleaseUpdateManyWithoutFilmInput = {
  create?: Maybe<Array<ReleaseCreateWithoutFilmInput>>,
  connect?: Maybe<Array<ReleaseWhereUniqueInput>>,
  set?: Maybe<Array<ReleaseWhereUniqueInput>>,
  disconnect?: Maybe<Array<ReleaseWhereUniqueInput>>,
  delete?: Maybe<Array<ReleaseWhereUniqueInput>>,
  update?: Maybe<Array<ReleaseUpdateWithWhereUniqueWithoutFilmInput>>,
  updateMany?: Maybe<Array<ReleaseUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ReleaseScalarWhereInput>>,
  upsert?: Maybe<Array<ReleaseUpsertWithWhereUniqueWithoutFilmInput>>,
};

export type ReleaseUpdateManyWithWhereNestedInput = {
  where: ReleaseScalarWhereInput,
  data: ReleaseUpdateManyDataInput,
};

export type ReleaseUpdateOneWithoutImagesInput = {
  create?: Maybe<ReleaseCreateWithoutImagesInput>,
  connect?: Maybe<ReleaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ReleaseUpdateWithoutImagesDataInput>,
  upsert?: Maybe<ReleaseUpsertWithoutImagesInput>,
};

export type ReleaseUpdateWithoutFilmDataInput = {
  id?: Maybe<Scalars['ID']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear?: Maybe<Scalars['Int']>,
  runtime?: Maybe<Scalars['Int']>,
  images?: Maybe<ImageUpdateManyWithoutReleaseInput>,
};

export type ReleaseUpdateWithoutImagesDataInput = {
  id?: Maybe<Scalars['ID']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  releaseDay?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseYear?: Maybe<Scalars['Int']>,
  runtime?: Maybe<Scalars['Int']>,
  film?: Maybe<FilmUpdateOneRequiredWithoutReleasesInput>,
};

export type ReleaseUpdateWithWhereUniqueWithoutFilmInput = {
  where: ReleaseWhereUniqueInput,
  data: ReleaseUpdateWithoutFilmDataInput,
};

export type ReleaseUpsertWithoutImagesInput = {
  update: ReleaseUpdateWithoutImagesDataInput,
  create: ReleaseCreateWithoutImagesInput,
};

export type ReleaseUpsertWithWhereUniqueWithoutFilmInput = {
  where: ReleaseWhereUniqueInput,
  update: ReleaseUpdateWithoutFilmDataInput,
  create: ReleaseCreateWithoutFilmInput,
};

export type ReleaseWhereInput = {
  id?: Maybe<StringFilter>,
  country?: Maybe<Country>,
  format?: Maybe<StringFilter>,
  images?: Maybe<ImageFilter>,
  notes?: Maybe<NullableStringFilter>,
  region?: Maybe<StringFilter>,
  releaseDay?: Maybe<NullableIntFilter>,
  releaseMonth?: Maybe<NullableIntFilter>,
  releaseYear?: Maybe<IntFilter>,
  runtime?: Maybe<IntFilter>,
  AND?: Maybe<Array<ReleaseWhereInput>>,
  OR?: Maybe<Array<ReleaseWhereInput>>,
  NOT?: Maybe<Array<ReleaseWhereInput>>,
  film?: Maybe<FilmWhereInput>,
};

export type ReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export type Studio = {
   __typename?: 'Studio',
  id: Scalars['String'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  foundedYear: Scalars['Int'],
  founders: Array<Person>,
  image?: Maybe<Image>,
  name: Scalars['String'],
};


export type StudioFoundersArgs = {
  where?: Maybe<StudioFoundersWhereInput>,
  orderBy?: Maybe<StudioFoundersOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type StudioCreateInput = {
  id: Scalars['String'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  foundedYear: Scalars['Int'],
  name: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  founders?: Maybe<PersonCreateManyWithoutFoundersInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
};

export type StudioCreateManyWithoutFoundedInput = {
  create?: Maybe<Array<StudioCreateWithoutFoundersInput>>,
  connect?: Maybe<Array<StudioWhereUniqueInput>>,
};

export type StudioCreateManyWithoutStudiosInput = {
  create?: Maybe<Array<StudioCreateWithoutImageInput>>,
  connect?: Maybe<Array<StudioWhereUniqueInput>>,
};

export type StudioCreateOneWithoutStudioInput = {
  create?: Maybe<StudioCreateWithoutFilmsInput>,
  connect?: Maybe<StudioWhereUniqueInput>,
};

export type StudioCreateWithoutFilmsInput = {
  id: Scalars['String'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  foundedYear: Scalars['Int'],
  name: Scalars['String'],
  founders?: Maybe<PersonCreateManyWithoutFoundersInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
};

export type StudioCreateWithoutFoundersInput = {
  id: Scalars['String'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  foundedYear: Scalars['Int'],
  name: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  image?: Maybe<ImageCreateOneWithoutImageInput>,
};

export type StudioCreateWithoutImageInput = {
  id: Scalars['String'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  foundedYear: Scalars['Int'],
  name: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutFilmsInput>,
  founders?: Maybe<PersonCreateManyWithoutFoundersInput>,
};

export type StudioFilter = {
  every?: Maybe<StudioWhereInput>,
  some?: Maybe<StudioWhereInput>,
  none?: Maybe<StudioWhereInput>,
};

export type StudioFoundersOrderByInput = {
  alias?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  lastName?: Maybe<OrderByArg>,
};

export type StudioFoundersWhereInput = {
  birthYear?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
};

export type StudioScalarWhereInput = {
  id?: Maybe<StringFilter>,
  city?: Maybe<NullableStringFilter>,
  country?: Maybe<Country>,
  films?: Maybe<FilmFilter>,
  foundedYear?: Maybe<IntFilter>,
  founders?: Maybe<PersonFilter>,
  name?: Maybe<StringFilter>,
  AND?: Maybe<Array<StudioScalarWhereInput>>,
  OR?: Maybe<Array<StudioScalarWhereInput>>,
  NOT?: Maybe<Array<StudioScalarWhereInput>>,
};

export type StudioUpdateInput = {
  id?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  foundedYear?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutStudioInput>,
  founders?: Maybe<PersonUpdateManyWithoutFoundedInput>,
  image?: Maybe<ImageUpdateOneWithoutStudiosInput>,
};

export type StudioUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  foundedYear?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type StudioUpdateManyWithoutFoundersInput = {
  create?: Maybe<Array<StudioCreateWithoutFoundersInput>>,
  connect?: Maybe<Array<StudioWhereUniqueInput>>,
  set?: Maybe<Array<StudioWhereUniqueInput>>,
  disconnect?: Maybe<Array<StudioWhereUniqueInput>>,
  delete?: Maybe<Array<StudioWhereUniqueInput>>,
  update?: Maybe<Array<StudioUpdateWithWhereUniqueWithoutFoundersInput>>,
  updateMany?: Maybe<Array<StudioUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<StudioScalarWhereInput>>,
  upsert?: Maybe<Array<StudioUpsertWithWhereUniqueWithoutFoundersInput>>,
};

export type StudioUpdateManyWithoutImageInput = {
  create?: Maybe<Array<StudioCreateWithoutImageInput>>,
  connect?: Maybe<Array<StudioWhereUniqueInput>>,
  set?: Maybe<Array<StudioWhereUniqueInput>>,
  disconnect?: Maybe<Array<StudioWhereUniqueInput>>,
  delete?: Maybe<Array<StudioWhereUniqueInput>>,
  update?: Maybe<Array<StudioUpdateWithWhereUniqueWithoutImageInput>>,
  updateMany?: Maybe<Array<StudioUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<StudioScalarWhereInput>>,
  upsert?: Maybe<Array<StudioUpsertWithWhereUniqueWithoutImageInput>>,
};

export type StudioUpdateManyWithWhereNestedInput = {
  where: StudioScalarWhereInput,
  data: StudioUpdateManyDataInput,
};

export type StudioUpdateOneWithoutFilmsInput = {
  create?: Maybe<StudioCreateWithoutFilmsInput>,
  connect?: Maybe<StudioWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<StudioUpdateWithoutFilmsDataInput>,
  upsert?: Maybe<StudioUpsertWithoutFilmsInput>,
};

export type StudioUpdateWithoutFilmsDataInput = {
  id?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  foundedYear?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  founders?: Maybe<PersonUpdateManyWithoutFoundedInput>,
  image?: Maybe<ImageUpdateOneWithoutStudiosInput>,
};

export type StudioUpdateWithoutFoundersDataInput = {
  id?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  foundedYear?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutStudioInput>,
  image?: Maybe<ImageUpdateOneWithoutStudiosInput>,
};

export type StudioUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  foundedYear?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutStudioInput>,
  founders?: Maybe<PersonUpdateManyWithoutFoundedInput>,
};

export type StudioUpdateWithWhereUniqueWithoutFoundersInput = {
  where: StudioWhereUniqueInput,
  data: StudioUpdateWithoutFoundersDataInput,
};

export type StudioUpdateWithWhereUniqueWithoutImageInput = {
  where: StudioWhereUniqueInput,
  data: StudioUpdateWithoutImageDataInput,
};

export type StudioUpsertWithoutFilmsInput = {
  update: StudioUpdateWithoutFilmsDataInput,
  create: StudioCreateWithoutFilmsInput,
};

export type StudioUpsertWithWhereUniqueWithoutFoundersInput = {
  where: StudioWhereUniqueInput,
  update: StudioUpdateWithoutFoundersDataInput,
  create: StudioCreateWithoutFoundersInput,
};

export type StudioUpsertWithWhereUniqueWithoutImageInput = {
  where: StudioWhereUniqueInput,
  update: StudioUpdateWithoutImageDataInput,
  create: StudioCreateWithoutImageInput,
};

export type StudioWhereInput = {
  id?: Maybe<StringFilter>,
  city?: Maybe<NullableStringFilter>,
  country?: Maybe<Country>,
  films?: Maybe<FilmFilter>,
  foundedYear?: Maybe<IntFilter>,
  founders?: Maybe<PersonFilter>,
  name?: Maybe<StringFilter>,
  AND?: Maybe<Array<StudioWhereInput>>,
  OR?: Maybe<Array<StudioWhereInput>>,
  NOT?: Maybe<Array<StudioWhereInput>>,
  image?: Maybe<ImageWhereInput>,
};

export type StudioWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type AllFilmsQueryVariables = {};


export type AllFilmsQuery = (
  { __typename?: 'Query' }
  & { films: Array<(
    { __typename?: 'Film' }
    & Pick<Film, 'id' | 'title' | 'titleEN' | 'releaseYear'>
    & { directors: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'alias' | 'firstName' | 'lastName'>
    )>, image: (
      { __typename?: 'Image' }
      & Pick<Image, 'name' | 'url'>
    ), studio: Maybe<(
      { __typename?: 'Studio' }
      & Pick<Studio, 'name'>
    )> }
  )> }
);

export type OnePersonQueryVariables = {
  id?: Maybe<Scalars['String']>
};


export type OnePersonQuery = (
  { __typename?: 'Query' }
  & { person: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'firstName' | 'alias' | 'lastName' | 'kanji'>
    & { image: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'copyright' | 'name' | 'url'>
    )>, directed: Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'titleEN'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'name' | 'url'>
      ) }
    )>, composed: Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'titleEN'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'name' | 'url'>
      ) }
    )> }
  )> }
);
