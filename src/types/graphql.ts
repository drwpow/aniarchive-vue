export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AnimationSequence = {
   __typename?: 'AnimationSequence',
  id: Scalars['String'],
  film: Film,
  image: Image,
  artists: Array<Person>,
  url: Scalars['String'],
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
};


export type AnimationSequenceArtistsArgs = {
  where?: Maybe<AnimationSequenceArtistsWhereInput>,
  orderBy?: Maybe<AnimationSequenceArtistsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type AnimationSequenceArtistsOrderByInput = {
  lastName?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  alias?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
};

export type AnimationSequenceArtistsWhereInput = {
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
};

export type AnimationSequenceCreateInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url: Scalars['String'],
  artists?: Maybe<PersonCreateManyWithoutAnimationSequencesInput>,
  film: FilmCreateOneWithoutAnimationSequencesInput,
  image: ImageCreateOneWithoutAnimationSequencesInput,
};

export type AnimationSequenceCreateManyWithoutArtistsInput = {
  create?: Maybe<Array<AnimationSequenceCreateWithoutArtistsInput>>,
  connect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
};

export type AnimationSequenceCreateManyWithoutFilmInput = {
  create?: Maybe<Array<AnimationSequenceCreateWithoutFilmInput>>,
  connect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
};

export type AnimationSequenceCreateManyWithoutImageInput = {
  create?: Maybe<Array<AnimationSequenceCreateWithoutImageInput>>,
  connect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
};

export type AnimationSequenceCreateWithoutArtistsInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url: Scalars['String'],
  film: FilmCreateOneWithoutAnimationSequencesInput,
  image: ImageCreateOneWithoutAnimationSequencesInput,
};

export type AnimationSequenceCreateWithoutFilmInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url: Scalars['String'],
  artists?: Maybe<PersonCreateManyWithoutAnimationSequencesInput>,
  image: ImageCreateOneWithoutAnimationSequencesInput,
};

export type AnimationSequenceCreateWithoutImageInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url: Scalars['String'],
  artists?: Maybe<PersonCreateManyWithoutAnimationSequencesInput>,
  film: FilmCreateOneWithoutAnimationSequencesInput,
};

export type AnimationSequenceFilter = {
  every?: Maybe<AnimationSequenceWhereInput>,
  some?: Maybe<AnimationSequenceWhereInput>,
  none?: Maybe<AnimationSequenceWhereInput>,
};

export type AnimationSequenceScalarWhereInput = {
  id?: Maybe<StringFilter>,
  artists?: Maybe<PersonFilter>,
  notes?: Maybe<NullableStringFilter>,
  timestampStart?: Maybe<NullableIntFilter>,
  timestampEnd?: Maybe<NullableIntFilter>,
  url?: Maybe<StringFilter>,
  AND?: Maybe<Array<AnimationSequenceScalarWhereInput>>,
  OR?: Maybe<Array<AnimationSequenceScalarWhereInput>>,
  NOT?: Maybe<Array<AnimationSequenceScalarWhereInput>>,
};

export type AnimationSequenceUpdateInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  artists?: Maybe<PersonUpdateManyWithoutAnimationSequencesInput>,
  film?: Maybe<FilmUpdateOneRequiredWithoutAnimationSequencesInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutAnimationSequencesInput>,
};

export type AnimationSequenceUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type AnimationSequenceUpdateManyWithoutArtistsInput = {
  create?: Maybe<Array<AnimationSequenceCreateWithoutArtistsInput>>,
  connect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  set?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  disconnect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  delete?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  update?: Maybe<Array<AnimationSequenceUpdateWithWhereUniqueWithoutArtistsInput>>,
  updateMany?: Maybe<Array<AnimationSequenceUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<AnimationSequenceScalarWhereInput>>,
  upsert?: Maybe<Array<AnimationSequenceUpsertWithWhereUniqueWithoutArtistsInput>>,
};

export type AnimationSequenceUpdateManyWithoutFilmInput = {
  create?: Maybe<Array<AnimationSequenceCreateWithoutFilmInput>>,
  connect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  set?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  disconnect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  delete?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  update?: Maybe<Array<AnimationSequenceUpdateWithWhereUniqueWithoutFilmInput>>,
  updateMany?: Maybe<Array<AnimationSequenceUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<AnimationSequenceScalarWhereInput>>,
  upsert?: Maybe<Array<AnimationSequenceUpsertWithWhereUniqueWithoutFilmInput>>,
};

export type AnimationSequenceUpdateManyWithoutImageInput = {
  create?: Maybe<Array<AnimationSequenceCreateWithoutImageInput>>,
  connect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  set?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  disconnect?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  delete?: Maybe<Array<AnimationSequenceWhereUniqueInput>>,
  update?: Maybe<Array<AnimationSequenceUpdateWithWhereUniqueWithoutImageInput>>,
  updateMany?: Maybe<Array<AnimationSequenceUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<AnimationSequenceScalarWhereInput>>,
  upsert?: Maybe<Array<AnimationSequenceUpsertWithWhereUniqueWithoutImageInput>>,
};

export type AnimationSequenceUpdateManyWithWhereNestedInput = {
  where: AnimationSequenceScalarWhereInput,
  data: AnimationSequenceUpdateManyDataInput,
};

export type AnimationSequenceUpdateWithoutArtistsDataInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  film?: Maybe<FilmUpdateOneRequiredWithoutAnimationSequencesInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutAnimationSequencesInput>,
};

export type AnimationSequenceUpdateWithoutFilmDataInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  artists?: Maybe<PersonUpdateManyWithoutAnimationSequencesInput>,
  image?: Maybe<ImageUpdateOneRequiredWithoutAnimationSequencesInput>,
};

export type AnimationSequenceUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  timestampStart?: Maybe<Scalars['Int']>,
  timestampEnd?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  artists?: Maybe<PersonUpdateManyWithoutAnimationSequencesInput>,
  film?: Maybe<FilmUpdateOneRequiredWithoutAnimationSequencesInput>,
};

export type AnimationSequenceUpdateWithWhereUniqueWithoutArtistsInput = {
  where: AnimationSequenceWhereUniqueInput,
  data: AnimationSequenceUpdateWithoutArtistsDataInput,
};

export type AnimationSequenceUpdateWithWhereUniqueWithoutFilmInput = {
  where: AnimationSequenceWhereUniqueInput,
  data: AnimationSequenceUpdateWithoutFilmDataInput,
};

export type AnimationSequenceUpdateWithWhereUniqueWithoutImageInput = {
  where: AnimationSequenceWhereUniqueInput,
  data: AnimationSequenceUpdateWithoutImageDataInput,
};

export type AnimationSequenceUpsertWithWhereUniqueWithoutArtistsInput = {
  where: AnimationSequenceWhereUniqueInput,
  update: AnimationSequenceUpdateWithoutArtistsDataInput,
  create: AnimationSequenceCreateWithoutArtistsInput,
};

export type AnimationSequenceUpsertWithWhereUniqueWithoutFilmInput = {
  where: AnimationSequenceWhereUniqueInput,
  update: AnimationSequenceUpdateWithoutFilmDataInput,
  create: AnimationSequenceCreateWithoutFilmInput,
};

export type AnimationSequenceUpsertWithWhereUniqueWithoutImageInput = {
  where: AnimationSequenceWhereUniqueInput,
  update: AnimationSequenceUpdateWithoutImageDataInput,
  create: AnimationSequenceCreateWithoutImageInput,
};

export type AnimationSequenceWhereInput = {
  id?: Maybe<StringFilter>,
  artists?: Maybe<PersonFilter>,
  notes?: Maybe<NullableStringFilter>,
  timestampStart?: Maybe<NullableIntFilter>,
  timestampEnd?: Maybe<NullableIntFilter>,
  url?: Maybe<StringFilter>,
  AND?: Maybe<Array<AnimationSequenceWhereInput>>,
  OR?: Maybe<Array<AnimationSequenceWhereInput>>,
  NOT?: Maybe<Array<AnimationSequenceWhereInput>>,
  film?: Maybe<FilmWhereInput>,
  image?: Maybe<ImageWhereInput>,
};

export type AnimationSequenceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
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
  title: Scalars['String'],
  titleEN: Scalars['String'],
  titleJP: Scalars['String'],
  releaseYear: Scalars['Int'],
  image: Image,
  studio?: Maybe<Studio>,
  trailer?: Maybe<Scalars['String']>,
  animationSequences: Array<AnimationSequence>,
  composers: Array<Person>,
  directors: Array<Person>,
  writers: Array<Person>,
  releases: Array<Release>,
};


export type FilmAnimationSequencesArgs = {
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


export type FilmWritersArgs = {
  where?: Maybe<FilmWritersWhereInput>,
  orderBy?: Maybe<FilmWritersOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmReleasesArgs = {
  orderBy?: Maybe<FilmReleasesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type FilmComposersOrderByInput = {
  lastName?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  alias?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
};

export type FilmComposersWhereInput = {
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
};

export type FilmCreateInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateManyWithoutComposersInput = {
  create?: Maybe<Array<FilmCreateWithoutComposersInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutDirectorsInput = {
  create?: Maybe<Array<FilmCreateWithoutDirectorsInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutImageInput = {
  create?: Maybe<Array<FilmCreateWithoutImageInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutStudioInput = {
  create?: Maybe<Array<FilmCreateWithoutStudioInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateManyWithoutWritersInput = {
  create?: Maybe<Array<FilmCreateWithoutWritersInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
};

export type FilmCreateOneWithoutAnimationSequencesInput = {
  create?: Maybe<FilmCreateWithoutAnimationSequencesInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
};

export type FilmCreateOneWithoutReleasesInput = {
  create?: Maybe<FilmCreateWithoutReleasesInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
};

export type FilmCreateWithoutAnimationSequencesInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateWithoutComposersInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateWithoutDirectorsInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateWithoutImageInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateWithoutReleasesInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateWithoutStudioInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
  writers?: Maybe<PersonCreateManyWithoutWroteInput>,
};

export type FilmCreateWithoutWritersInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  titleJP: Scalars['String'],
  titleEN: Scalars['String'],
  releaseYear: Scalars['Int'],
  trailer?: Maybe<Scalars['String']>,
  image: ImageCreateOneWithoutFilmsInput,
  releases?: Maybe<ReleaseCreateManyWithoutFilmInput>,
  studio?: Maybe<StudioCreateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutFilmInput>,
  composers?: Maybe<PersonCreateManyWithoutComposedInput>,
  directors?: Maybe<PersonCreateManyWithoutDirectedInput>,
};

export type FilmDirectorsOrderByInput = {
  lastName?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  alias?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
};

export type FilmDirectorsWhereInput = {
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
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
  title?: Maybe<StringFilter>,
  titleJP?: Maybe<StringFilter>,
  titleEN?: Maybe<StringFilter>,
  releaseYear?: Maybe<IntFilter>,
  releases?: Maybe<ReleaseFilter>,
  trailer?: Maybe<NullableStringFilter>,
  animationSequences?: Maybe<AnimationSequenceFilter>,
  composers?: Maybe<PersonFilter>,
  directors?: Maybe<PersonFilter>,
  writers?: Maybe<PersonFilter>,
  AND?: Maybe<Array<FilmScalarWhereInput>>,
  OR?: Maybe<Array<FilmScalarWhereInput>>,
  NOT?: Maybe<Array<FilmScalarWhereInput>>,
};

export type FilmUpdateInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
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

export type FilmUpdateManyWithoutWritersInput = {
  create?: Maybe<Array<FilmCreateWithoutWritersInput>>,
  connect?: Maybe<Array<FilmWhereUniqueInput>>,
  set?: Maybe<Array<FilmWhereUniqueInput>>,
  disconnect?: Maybe<Array<FilmWhereUniqueInput>>,
  delete?: Maybe<Array<FilmWhereUniqueInput>>,
  update?: Maybe<Array<FilmUpdateWithWhereUniqueWithoutWritersInput>>,
  updateMany?: Maybe<Array<FilmUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FilmScalarWhereInput>>,
  upsert?: Maybe<Array<FilmUpsertWithWhereUniqueWithoutWritersInput>>,
};

export type FilmUpdateManyWithWhereNestedInput = {
  where: FilmScalarWhereInput,
  data: FilmUpdateManyDataInput,
};

export type FilmUpdateOneRequiredWithoutAnimationSequencesInput = {
  create?: Maybe<FilmCreateWithoutAnimationSequencesInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
  update?: Maybe<FilmUpdateWithoutAnimationSequencesDataInput>,
  upsert?: Maybe<FilmUpsertWithoutAnimationSequencesInput>,
};

export type FilmUpdateOneRequiredWithoutReleasesInput = {
  create?: Maybe<FilmCreateWithoutReleasesInput>,
  connect?: Maybe<FilmWhereUniqueInput>,
  update?: Maybe<FilmUpdateWithoutReleasesDataInput>,
  upsert?: Maybe<FilmUpsertWithoutReleasesInput>,
};

export type FilmUpdateWithoutAnimationSequencesDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateWithoutComposersDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateWithoutDirectorsDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateWithoutReleasesDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateWithoutStudioDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
  writers?: Maybe<PersonUpdateManyWithoutWroteInput>,
};

export type FilmUpdateWithoutWritersDataInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  trailer?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneRequiredWithoutFilmsInput>,
  releases?: Maybe<ReleaseUpdateManyWithoutFilmInput>,
  studio?: Maybe<StudioUpdateOneWithoutFilmsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutFilmInput>,
  composers?: Maybe<PersonUpdateManyWithoutComposedInput>,
  directors?: Maybe<PersonUpdateManyWithoutDirectedInput>,
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

export type FilmUpdateWithWhereUniqueWithoutStudioInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutStudioDataInput,
};

export type FilmUpdateWithWhereUniqueWithoutWritersInput = {
  where: FilmWhereUniqueInput,
  data: FilmUpdateWithoutWritersDataInput,
};

export type FilmUpsertWithoutAnimationSequencesInput = {
  update: FilmUpdateWithoutAnimationSequencesDataInput,
  create: FilmCreateWithoutAnimationSequencesInput,
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

export type FilmUpsertWithWhereUniqueWithoutStudioInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutStudioDataInput,
  create: FilmCreateWithoutStudioInput,
};

export type FilmUpsertWithWhereUniqueWithoutWritersInput = {
  where: FilmWhereUniqueInput,
  update: FilmUpdateWithoutWritersDataInput,
  create: FilmCreateWithoutWritersInput,
};

export type FilmWhereInput = {
  id?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
  titleJP?: Maybe<StringFilter>,
  titleEN?: Maybe<StringFilter>,
  releaseYear?: Maybe<IntFilter>,
  releases?: Maybe<ReleaseFilter>,
  trailer?: Maybe<NullableStringFilter>,
  animationSequences?: Maybe<AnimationSequenceFilter>,
  composers?: Maybe<PersonFilter>,
  directors?: Maybe<PersonFilter>,
  writers?: Maybe<PersonFilter>,
  AND?: Maybe<Array<FilmWhereInput>>,
  OR?: Maybe<Array<FilmWhereInput>>,
  NOT?: Maybe<Array<FilmWhereInput>>,
  image?: Maybe<ImageWhereInput>,
  studio?: Maybe<StudioWhereInput>,
};

export type FilmWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleJP?: Maybe<Scalars['String']>,
  titleEN?: Maybe<Scalars['String']>,
};

export type FilmWritersOrderByInput = {
  lastName?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  alias?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
};

export type FilmWritersWhereInput = {
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
};

export type Image = {
   __typename?: 'Image',
  id: Scalars['String'],
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
};

export type ImageCreateInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutImageInput>,
  persons?: Maybe<PersonCreateManyWithoutImageInput>,
  release?: Maybe<ReleaseCreateOneWithoutImagesInput>,
  studios?: Maybe<StudioCreateManyWithoutImageInput>,
};

export type ImageCreateManyWithoutReleaseInput = {
  create?: Maybe<Array<ImageCreateWithoutReleaseInput>>,
  connect?: Maybe<Array<ImageWhereUniqueInput>>,
};

export type ImageCreateOneWithoutAnimationSequencesInput = {
  create?: Maybe<ImageCreateWithoutAnimationSequencesInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
};

export type ImageCreateOneWithoutFilmsInput = {
  create?: Maybe<ImageCreateWithoutFilmsInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
};

export type ImageCreateOneWithoutPersonsInput = {
  create?: Maybe<ImageCreateWithoutPersonsInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
};

export type ImageCreateOneWithoutStudiosInput = {
  create?: Maybe<ImageCreateWithoutStudiosInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
};

export type ImageCreateWithoutAnimationSequencesInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutImageInput>,
  persons?: Maybe<PersonCreateManyWithoutImageInput>,
  release?: Maybe<ReleaseCreateOneWithoutImagesInput>,
  studios?: Maybe<StudioCreateManyWithoutImageInput>,
};

export type ImageCreateWithoutFilmsInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutImageInput>,
  persons?: Maybe<PersonCreateManyWithoutImageInput>,
  release?: Maybe<ReleaseCreateOneWithoutImagesInput>,
  studios?: Maybe<StudioCreateManyWithoutImageInput>,
};

export type ImageCreateWithoutPersonsInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutImageInput>,
  release?: Maybe<ReleaseCreateOneWithoutImagesInput>,
  studios?: Maybe<StudioCreateManyWithoutImageInput>,
};

export type ImageCreateWithoutReleaseInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutImageInput>,
  persons?: Maybe<PersonCreateManyWithoutImageInput>,
  studios?: Maybe<StudioCreateManyWithoutImageInput>,
};

export type ImageCreateWithoutStudiosInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  url: Scalars['String'],
  films?: Maybe<FilmCreateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutImageInput>,
  persons?: Maybe<PersonCreateManyWithoutImageInput>,
  release?: Maybe<ReleaseCreateOneWithoutImagesInput>,
};

export type ImageFilter = {
  every?: Maybe<ImageWhereInput>,
  some?: Maybe<ImageWhereInput>,
  none?: Maybe<ImageWhereInput>,
};

export type ImageScalarWhereInput = {
  id?: Maybe<StringFilter>,
  copyright?: Maybe<NullableStringFilter>,
  title?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  films?: Maybe<FilmFilter>,
  animationSequences?: Maybe<AnimationSequenceFilter>,
  persons?: Maybe<PersonFilter>,
  studios?: Maybe<StudioFilter>,
  AND?: Maybe<Array<ImageScalarWhereInput>>,
  OR?: Maybe<Array<ImageScalarWhereInput>>,
  NOT?: Maybe<Array<ImageScalarWhereInput>>,
};

export type ImageUpdateInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
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

export type ImageUpdateOneRequiredWithoutAnimationSequencesInput = {
  create?: Maybe<ImageCreateWithoutAnimationSequencesInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
  update?: Maybe<ImageUpdateWithoutAnimationSequencesDataInput>,
  upsert?: Maybe<ImageUpsertWithoutAnimationSequencesInput>,
};

export type ImageUpdateOneRequiredWithoutFilmsInput = {
  create?: Maybe<ImageCreateWithoutFilmsInput>,
  connect?: Maybe<ImageWhereUniqueInput>,
  update?: Maybe<ImageUpdateWithoutFilmsDataInput>,
  upsert?: Maybe<ImageUpsertWithoutFilmsInput>,
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

export type ImageUpdateWithoutAnimationSequencesDataInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutFilmsDataInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutPersonsDataInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutReleaseDataInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  studios?: Maybe<StudioUpdateManyWithoutImageInput>,
};

export type ImageUpdateWithoutStudiosDataInput = {
  id?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  films?: Maybe<FilmUpdateManyWithoutImageInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutImageInput>,
  persons?: Maybe<PersonUpdateManyWithoutImageInput>,
  release?: Maybe<ReleaseUpdateOneWithoutImagesInput>,
};

export type ImageUpdateWithWhereUniqueWithoutReleaseInput = {
  where: ImageWhereUniqueInput,
  data: ImageUpdateWithoutReleaseDataInput,
};

export type ImageUpsertWithoutAnimationSequencesInput = {
  update: ImageUpdateWithoutAnimationSequencesDataInput,
  create: ImageCreateWithoutAnimationSequencesInput,
};

export type ImageUpsertWithoutFilmsInput = {
  update: ImageUpdateWithoutFilmsDataInput,
  create: ImageCreateWithoutFilmsInput,
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
  title?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  films?: Maybe<FilmFilter>,
  animationSequences?: Maybe<AnimationSequenceFilter>,
  persons?: Maybe<PersonFilter>,
  studios?: Maybe<StudioFilter>,
  AND?: Maybe<Array<ImageWhereInput>>,
  OR?: Maybe<Array<ImageWhereInput>>,
  NOT?: Maybe<Array<ImageWhereInput>>,
  release?: Maybe<ReleaseWhereInput>,
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
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
  createOneAnimationSequence: AnimationSequence,
  createOneFilm: Film,
  createOneImage: Image,
  createOnePerson: Person,
  createOneRelease: Release,
  createOneStudio: Studio,
  deleteOneAnimationSequence?: Maybe<AnimationSequence>,
  deleteOneFilm?: Maybe<Film>,
  deleteOneImage?: Maybe<Image>,
  deleteOnePerson?: Maybe<Person>,
  deleteOneRelease?: Maybe<Release>,
  deleteOneStudio?: Maybe<Studio>,
  updateOneAnimationSequence?: Maybe<AnimationSequence>,
  updateOneFilm?: Maybe<Film>,
  updateOneImage?: Maybe<Image>,
  updateOnePerson?: Maybe<Person>,
  updateOneRelease?: Maybe<Release>,
  updateOneStudio?: Maybe<Studio>,
};


export type MutationCreateOneAnimationSequenceArgs = {
  data: AnimationSequenceCreateInput
};


export type MutationCreateOneFilmArgs = {
  data: FilmCreateInput
};


export type MutationCreateOneImageArgs = {
  data: ImageCreateInput
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


export type MutationDeleteOneAnimationSequenceArgs = {
  where: AnimationSequenceWhereUniqueInput
};


export type MutationDeleteOneFilmArgs = {
  where: FilmWhereUniqueInput
};


export type MutationDeleteOneImageArgs = {
  where: ImageWhereUniqueInput
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


export type MutationUpdateOneAnimationSequenceArgs = {
  data: AnimationSequenceUpdateInput,
  where: AnimationSequenceWhereUniqueInput
};


export type MutationUpdateOneFilmArgs = {
  data: FilmUpdateInput,
  where: FilmWhereUniqueInput
};


export type MutationUpdateOneImageArgs = {
  data: ImageUpdateInput,
  where: ImageWhereUniqueInput
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
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  directed: Array<Film>,
  composed: Array<Film>,
  wrote: Array<Film>,
  founded: Array<Studio>,
  animationSequences: Array<AnimationSequence>,
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


export type PersonComposedArgs = {
  where?: Maybe<PersonComposedWhereInput>,
  orderBy?: Maybe<PersonComposedOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonWroteArgs = {
  where?: Maybe<PersonWroteWhereInput>,
  orderBy?: Maybe<PersonWroteOrderByInput>,
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


export type PersonAnimationSequencesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PersonComposedOrderByInput = {
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
  releaseYear?: Maybe<OrderByArg>,
};

export type PersonComposedWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type PersonCreateInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageCreateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutArtistsInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmCreateManyWithoutWritersInput>,
  composed?: Maybe<FilmCreateManyWithoutComposersInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundersInput>,
};

export type PersonCreateManyWithoutAnimationSequencesInput = {
  create?: Maybe<Array<PersonCreateWithoutAnimationSequencesInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutComposedInput = {
  create?: Maybe<Array<PersonCreateWithoutComposedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutDirectedInput = {
  create?: Maybe<Array<PersonCreateWithoutDirectedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutFoundedInput = {
  create?: Maybe<Array<PersonCreateWithoutFoundedInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutImageInput = {
  create?: Maybe<Array<PersonCreateWithoutImageInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateManyWithoutWroteInput = {
  create?: Maybe<Array<PersonCreateWithoutWroteInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
};

export type PersonCreateWithoutAnimationSequencesInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageCreateOneWithoutPersonsInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmCreateManyWithoutWritersInput>,
  composed?: Maybe<FilmCreateManyWithoutComposersInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundersInput>,
};

export type PersonCreateWithoutComposedInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageCreateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutArtistsInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmCreateManyWithoutWritersInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundersInput>,
};

export type PersonCreateWithoutDirectedInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageCreateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutArtistsInput>,
  wrote?: Maybe<FilmCreateManyWithoutWritersInput>,
  composed?: Maybe<FilmCreateManyWithoutComposersInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundersInput>,
};

export type PersonCreateWithoutFoundedInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageCreateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutArtistsInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmCreateManyWithoutWritersInput>,
  composed?: Maybe<FilmCreateManyWithoutComposersInput>,
};

export type PersonCreateWithoutImageInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutArtistsInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmCreateManyWithoutWritersInput>,
  composed?: Maybe<FilmCreateManyWithoutComposersInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundersInput>,
};

export type PersonCreateWithoutWroteInput = {
  id: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country: Country,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageCreateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceCreateManyWithoutArtistsInput>,
  directed?: Maybe<FilmCreateManyWithoutDirectorsInput>,
  composed?: Maybe<FilmCreateManyWithoutComposersInput>,
  founded?: Maybe<StudioCreateManyWithoutFoundersInput>,
};

export type PersonDirectedOrderByInput = {
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
  releaseYear?: Maybe<OrderByArg>,
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
  name?: Maybe<OrderByArg>,
  foundedYear?: Maybe<OrderByArg>,
};

export type PersonFoundedWhereInput = {
  foundedYear?: Maybe<IntFilter>,
  country?: Maybe<Country>,
};

export type PersonScalarWhereInput = {
  id?: Maybe<StringFilter>,
  lastName?: Maybe<StringFilter>,
  firstName?: Maybe<StringFilter>,
  kanji?: Maybe<NullableStringFilter>,
  alias?: Maybe<NullableStringFilter>,
  description?: Maybe<NullableStringFilter>,
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
  birthMonth?: Maybe<NullableIntFilter>,
  birthDay?: Maybe<NullableIntFilter>,
  deathYear?: Maybe<NullableIntFilter>,
  deathMonth?: Maybe<NullableIntFilter>,
  deathDay?: Maybe<NullableIntFilter>,
  website?: Maybe<NullableStringFilter>,
  animationSequences?: Maybe<AnimationSequenceFilter>,
  directed?: Maybe<FilmFilter>,
  wrote?: Maybe<FilmFilter>,
  composed?: Maybe<FilmFilter>,
  founded?: Maybe<StudioFilter>,
  AND?: Maybe<Array<PersonScalarWhereInput>>,
  OR?: Maybe<Array<PersonScalarWhereInput>>,
  NOT?: Maybe<Array<PersonScalarWhereInput>>,
};

export type PersonUpdateInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutArtistsInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmUpdateManyWithoutWritersInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
};

export type PersonUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
};

export type PersonUpdateManyWithoutAnimationSequencesInput = {
  create?: Maybe<Array<PersonCreateWithoutAnimationSequencesInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutAnimationSequencesInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutAnimationSequencesInput>>,
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

export type PersonUpdateManyWithoutWroteInput = {
  create?: Maybe<Array<PersonCreateWithoutWroteInput>>,
  connect?: Maybe<Array<PersonWhereUniqueInput>>,
  set?: Maybe<Array<PersonWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>,
  delete?: Maybe<Array<PersonWhereUniqueInput>>,
  update?: Maybe<Array<PersonUpdateWithWhereUniqueWithoutWroteInput>>,
  updateMany?: Maybe<Array<PersonUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PersonScalarWhereInput>>,
  upsert?: Maybe<Array<PersonUpsertWithWhereUniqueWithoutWroteInput>>,
};

export type PersonUpdateManyWithWhereNestedInput = {
  where: PersonScalarWhereInput,
  data: PersonUpdateManyDataInput,
};

export type PersonUpdateWithoutAnimationSequencesDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmUpdateManyWithoutWritersInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
};

export type PersonUpdateWithoutComposedDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutArtistsInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmUpdateManyWithoutWritersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
};

export type PersonUpdateWithoutDirectedDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutArtistsInput>,
  wrote?: Maybe<FilmUpdateManyWithoutWritersInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
};

export type PersonUpdateWithoutFoundedDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutArtistsInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmUpdateManyWithoutWritersInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
};

export type PersonUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutArtistsInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  wrote?: Maybe<FilmUpdateManyWithoutWritersInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
};

export type PersonUpdateWithoutWroteDataInput = {
  id?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  kanji?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  birthYear?: Maybe<Scalars['Int']>,
  birthMonth?: Maybe<Scalars['Int']>,
  birthDay?: Maybe<Scalars['Int']>,
  deathYear?: Maybe<Scalars['Int']>,
  deathMonth?: Maybe<Scalars['Int']>,
  deathDay?: Maybe<Scalars['Int']>,
  website?: Maybe<Scalars['String']>,
  image?: Maybe<ImageUpdateOneWithoutPersonsInput>,
  animationSequences?: Maybe<AnimationSequenceUpdateManyWithoutArtistsInput>,
  directed?: Maybe<FilmUpdateManyWithoutDirectorsInput>,
  composed?: Maybe<FilmUpdateManyWithoutComposersInput>,
  founded?: Maybe<StudioUpdateManyWithoutFoundersInput>,
};

export type PersonUpdateWithWhereUniqueWithoutAnimationSequencesInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutAnimationSequencesDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutComposedInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutComposedDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutDirectedInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutDirectedDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutFoundedInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutFoundedDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutImageInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutImageDataInput,
};

export type PersonUpdateWithWhereUniqueWithoutWroteInput = {
  where: PersonWhereUniqueInput,
  data: PersonUpdateWithoutWroteDataInput,
};

export type PersonUpsertWithWhereUniqueWithoutAnimationSequencesInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutAnimationSequencesDataInput,
  create: PersonCreateWithoutAnimationSequencesInput,
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

export type PersonUpsertWithWhereUniqueWithoutFoundedInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutFoundedDataInput,
  create: PersonCreateWithoutFoundedInput,
};

export type PersonUpsertWithWhereUniqueWithoutImageInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutImageDataInput,
  create: PersonCreateWithoutImageInput,
};

export type PersonUpsertWithWhereUniqueWithoutWroteInput = {
  where: PersonWhereUniqueInput,
  update: PersonUpdateWithoutWroteDataInput,
  create: PersonCreateWithoutWroteInput,
};

export type PersonWhereInput = {
  id?: Maybe<StringFilter>,
  lastName?: Maybe<StringFilter>,
  firstName?: Maybe<StringFilter>,
  kanji?: Maybe<NullableStringFilter>,
  alias?: Maybe<NullableStringFilter>,
  description?: Maybe<NullableStringFilter>,
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
  birthMonth?: Maybe<NullableIntFilter>,
  birthDay?: Maybe<NullableIntFilter>,
  deathYear?: Maybe<NullableIntFilter>,
  deathMonth?: Maybe<NullableIntFilter>,
  deathDay?: Maybe<NullableIntFilter>,
  website?: Maybe<NullableStringFilter>,
  animationSequences?: Maybe<AnimationSequenceFilter>,
  directed?: Maybe<FilmFilter>,
  wrote?: Maybe<FilmFilter>,
  composed?: Maybe<FilmFilter>,
  founded?: Maybe<StudioFilter>,
  AND?: Maybe<Array<PersonWhereInput>>,
  OR?: Maybe<Array<PersonWhereInput>>,
  NOT?: Maybe<Array<PersonWhereInput>>,
  image?: Maybe<ImageWhereInput>,
};

export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
};

export type PersonWroteOrderByInput = {
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
  releaseYear?: Maybe<OrderByArg>,
};

export type PersonWroteWhereInput = {
  releaseYear?: Maybe<IntFilter>,
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
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
  releaseYear?: Maybe<OrderByArg>,
};

export type QueryFilmsWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type QueryPeopleOrderByInput = {
  lastName?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  alias?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
};

export type QueryPeopleWhereInput = {
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
};

export type QueryStudiosOrderByInput = {
  name?: Maybe<OrderByArg>,
  foundedYear?: Maybe<OrderByArg>,
};

export type QueryStudiosWhereInput = {
  foundedYear?: Maybe<IntFilter>,
  country?: Maybe<Country>,
};

export type Release = {
   __typename?: 'Release',
  id: Scalars['String'],
  film: Film,
  images: Array<Image>,
  releaseYear: Scalars['Int'],
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  runtime: Scalars['Int'],
};


export type ReleaseImagesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ReleaseCreateInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear: Scalars['Int'],
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  runtime: Scalars['Int'],
  film: FilmCreateOneWithoutReleasesInput,
  images?: Maybe<ImageCreateManyWithoutReleaseInput>,
};

export type ReleaseCreateManyWithoutFilmInput = {
  create?: Maybe<Array<ReleaseCreateWithoutFilmInput>>,
  connect?: Maybe<Array<ReleaseWhereUniqueInput>>,
};

export type ReleaseCreateOneWithoutImagesInput = {
  create?: Maybe<ReleaseCreateWithoutImagesInput>,
  connect?: Maybe<ReleaseWhereUniqueInput>,
};

export type ReleaseCreateWithoutFilmInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear: Scalars['Int'],
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  runtime: Scalars['Int'],
  images?: Maybe<ImageCreateManyWithoutReleaseInput>,
};

export type ReleaseCreateWithoutImagesInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear: Scalars['Int'],
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country: Country,
  format: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  runtime: Scalars['Int'],
  film: FilmCreateOneWithoutReleasesInput,
};

export type ReleaseFilter = {
  every?: Maybe<ReleaseWhereInput>,
  some?: Maybe<ReleaseWhereInput>,
  none?: Maybe<ReleaseWhereInput>,
};

export type ReleaseScalarWhereInput = {
  id?: Maybe<StringFilter>,
  images?: Maybe<ImageFilter>,
  releaseYear?: Maybe<IntFilter>,
  releaseMonth?: Maybe<NullableIntFilter>,
  releaseDay?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
  format?: Maybe<StringFilter>,
  notes?: Maybe<NullableStringFilter>,
  runtime?: Maybe<IntFilter>,
  AND?: Maybe<Array<ReleaseScalarWhereInput>>,
  OR?: Maybe<Array<ReleaseScalarWhereInput>>,
  NOT?: Maybe<Array<ReleaseScalarWhereInput>>,
};

export type ReleaseUpdateInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  runtime?: Maybe<Scalars['Int']>,
  film?: Maybe<FilmUpdateOneRequiredWithoutReleasesInput>,
  images?: Maybe<ImageUpdateManyWithoutReleaseInput>,
};

export type ReleaseUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
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
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  runtime?: Maybe<Scalars['Int']>,
  images?: Maybe<ImageUpdateManyWithoutReleaseInput>,
};

export type ReleaseUpdateWithoutImagesDataInput = {
  id?: Maybe<Scalars['String']>,
  releaseYear?: Maybe<Scalars['Int']>,
  releaseMonth?: Maybe<Scalars['Int']>,
  releaseDay?: Maybe<Scalars['Int']>,
  country?: Maybe<Country>,
  format?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
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
  images?: Maybe<ImageFilter>,
  releaseYear?: Maybe<IntFilter>,
  releaseMonth?: Maybe<NullableIntFilter>,
  releaseDay?: Maybe<NullableIntFilter>,
  country?: Maybe<Country>,
  format?: Maybe<StringFilter>,
  notes?: Maybe<NullableStringFilter>,
  runtime?: Maybe<IntFilter>,
  AND?: Maybe<Array<ReleaseWhereInput>>,
  OR?: Maybe<Array<ReleaseWhereInput>>,
  NOT?: Maybe<Array<ReleaseWhereInput>>,
  film?: Maybe<FilmWhereInput>,
};

export type ReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['String']>,
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
  name: Scalars['String'],
  image?: Maybe<Image>,
  foundedYear: Scalars['Int'],
  films: Array<Film>,
  city?: Maybe<Scalars['String']>,
  country: Country,
  founders: Array<Person>,
};


export type StudioFilmsArgs = {
  where?: Maybe<StudioFilmsWhereInput>,
  orderBy?: Maybe<StudioFilmsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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
  name: Scalars['String'],
  foundedYear: Scalars['Int'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  image?: Maybe<ImageCreateOneWithoutStudiosInput>,
  films?: Maybe<FilmCreateManyWithoutStudioInput>,
  founders?: Maybe<PersonCreateManyWithoutFoundedInput>,
};

export type StudioCreateManyWithoutFoundersInput = {
  create?: Maybe<Array<StudioCreateWithoutFoundersInput>>,
  connect?: Maybe<Array<StudioWhereUniqueInput>>,
};

export type StudioCreateManyWithoutImageInput = {
  create?: Maybe<Array<StudioCreateWithoutImageInput>>,
  connect?: Maybe<Array<StudioWhereUniqueInput>>,
};

export type StudioCreateOneWithoutFilmsInput = {
  create?: Maybe<StudioCreateWithoutFilmsInput>,
  connect?: Maybe<StudioWhereUniqueInput>,
};

export type StudioCreateWithoutFilmsInput = {
  id: Scalars['String'],
  name: Scalars['String'],
  foundedYear: Scalars['Int'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  image?: Maybe<ImageCreateOneWithoutStudiosInput>,
  founders?: Maybe<PersonCreateManyWithoutFoundedInput>,
};

export type StudioCreateWithoutFoundersInput = {
  id: Scalars['String'],
  name: Scalars['String'],
  foundedYear: Scalars['Int'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  image?: Maybe<ImageCreateOneWithoutStudiosInput>,
  films?: Maybe<FilmCreateManyWithoutStudioInput>,
};

export type StudioCreateWithoutImageInput = {
  id: Scalars['String'],
  name: Scalars['String'],
  foundedYear: Scalars['Int'],
  city?: Maybe<Scalars['String']>,
  country: Country,
  films?: Maybe<FilmCreateManyWithoutStudioInput>,
  founders?: Maybe<PersonCreateManyWithoutFoundedInput>,
};

export type StudioFilmsOrderByInput = {
  title?: Maybe<OrderByArg>,
  titleJP?: Maybe<OrderByArg>,
  titleEN?: Maybe<OrderByArg>,
  releaseYear?: Maybe<OrderByArg>,
};

export type StudioFilmsWhereInput = {
  releaseYear?: Maybe<IntFilter>,
};

export type StudioFilter = {
  every?: Maybe<StudioWhereInput>,
  some?: Maybe<StudioWhereInput>,
  none?: Maybe<StudioWhereInput>,
};

export type StudioFoundersOrderByInput = {
  lastName?: Maybe<OrderByArg>,
  firstName?: Maybe<OrderByArg>,
  alias?: Maybe<OrderByArg>,
  country?: Maybe<OrderByArg>,
  birthYear?: Maybe<OrderByArg>,
};

export type StudioFoundersWhereInput = {
  country?: Maybe<Country>,
  birthYear?: Maybe<NullableIntFilter>,
};

export type StudioScalarWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  foundedYear?: Maybe<IntFilter>,
  films?: Maybe<FilmFilter>,
  city?: Maybe<NullableStringFilter>,
  country?: Maybe<Country>,
  founders?: Maybe<PersonFilter>,
  AND?: Maybe<Array<StudioScalarWhereInput>>,
  OR?: Maybe<Array<StudioScalarWhereInput>>,
  NOT?: Maybe<Array<StudioScalarWhereInput>>,
};

export type StudioUpdateInput = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  foundedYear?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  image?: Maybe<ImageUpdateOneWithoutStudiosInput>,
  films?: Maybe<FilmUpdateManyWithoutStudioInput>,
  founders?: Maybe<PersonUpdateManyWithoutFoundedInput>,
};

export type StudioUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  foundedYear?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
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
  name?: Maybe<Scalars['String']>,
  foundedYear?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  image?: Maybe<ImageUpdateOneWithoutStudiosInput>,
  founders?: Maybe<PersonUpdateManyWithoutFoundedInput>,
};

export type StudioUpdateWithoutFoundersDataInput = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  foundedYear?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  image?: Maybe<ImageUpdateOneWithoutStudiosInput>,
  films?: Maybe<FilmUpdateManyWithoutStudioInput>,
};

export type StudioUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  foundedYear?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
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
  name?: Maybe<StringFilter>,
  foundedYear?: Maybe<IntFilter>,
  films?: Maybe<FilmFilter>,
  city?: Maybe<NullableStringFilter>,
  country?: Maybe<Country>,
  founders?: Maybe<PersonFilter>,
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
    & { image: (
      { __typename?: 'Image' }
      & Pick<Image, 'title' | 'url'>
    ), studio: Maybe<(
      { __typename?: 'Studio' }
      & Pick<Studio, 'name'>
    )> }
  )> }
);

export type OneFilmQueryVariables = {
  id?: Maybe<Scalars['String']>
};


export type OneFilmQuery = (
  { __typename?: 'Query' }
  & { film: Maybe<(
    { __typename?: 'Film' }
    & Pick<Film, 'title' | 'titleEN' | 'releaseYear'>
    & { image: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ), studio: Maybe<(
      { __typename?: 'Studio' }
      & Pick<Studio, 'id' | 'name'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      )> }
    )>, directors: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'lastName' | 'firstName' | 'alias'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      )> }
    )>, writers: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'lastName' | 'firstName' | 'alias'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      )> }
    )>, composers: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'lastName' | 'firstName' | 'alias'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      )> }
    )>, animationSequences: Array<(
      { __typename?: 'AnimationSequence' }
      & Pick<AnimationSequence, 'id' | 'url'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      ) }
    )>, releases: Array<(
      { __typename?: 'Release' }
      & Pick<Release, 'country' | 'notes' | 'releaseDay' | 'releaseMonth' | 'releaseYear'>
      & { images: Array<(
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      )> }
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
    & Pick<Person, 'lastName' | 'firstName' | 'kanji' | 'alias' | 'birthDay' | 'birthMonth' | 'birthYear' | 'deathDay' | 'deathMonth' | 'deathYear' | 'description' | 'country'>
    & { image: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'copyright' | 'title' | 'url'>
    )>, founded: Array<(
      { __typename?: 'Studio' }
      & Pick<Studio, 'id' | 'name'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      )> }
    )>, directed: Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'title' | 'titleEN' | 'releaseYear'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      ), studio: Maybe<(
        { __typename?: 'Studio' }
        & Pick<Studio, 'name'>
      )> }
    )>, wrote: Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'title' | 'titleEN' | 'releaseYear'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      ), studio: Maybe<(
        { __typename?: 'Studio' }
        & Pick<Studio, 'name'>
      )> }
    )>, composed: Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'title' | 'titleEN' | 'releaseYear'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      ), studio: Maybe<(
        { __typename?: 'Studio' }
        & Pick<Studio, 'name'>
      )> }
    )>, animationSequences: Array<(
      { __typename?: 'AnimationSequence' }
      & Pick<AnimationSequence, 'id' | 'url'>
      & { film: (
        { __typename?: 'Film' }
        & Pick<Film, 'id' | 'releaseYear' | 'title' | 'titleEN'>
        & { image: (
          { __typename?: 'Image' }
          & Pick<Image, 'title' | 'url'>
        ) }
      ), image: (
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      ) }
    )> }
  )> }
);

export type OneStudioQueryVariables = {
  id?: Maybe<Scalars['String']>
};


export type OneStudioQuery = (
  { __typename?: 'Query' }
  & { studio: Maybe<(
    { __typename?: 'Studio' }
    & Pick<Studio, 'id' | 'name' | 'foundedYear' | 'country' | 'city'>
    & { founders: Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'firstName' | 'lastName' | 'alias'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      )> }
    )>, image: Maybe<(
      { __typename?: 'Image' }
      & Pick<Image, 'title' | 'url'>
    )>, films: Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'title' | 'titleEN' | 'releaseYear'>
      & { image: (
        { __typename?: 'Image' }
        & Pick<Image, 'title' | 'url'>
      ), studio: Maybe<(
        { __typename?: 'Studio' }
        & Pick<Studio, 'name'>
      )> }
    )> }
  )> }
);
